import { useEffect, useMemo, useRef, useState } from 'react';
import useWindowSize, { useFetchAnyTruncatedContent } from './hooks';
import { nanoid } from 'nanoid';
import {
  selectIFrameReady,
  selectIFrameHeight as selectIFrameHeight,
} from '~/selectors';
import { State } from '~/store';
import { useSelector } from 'react-redux';
import { host, actions } from '@curvenote/connect';
import {
  MinifiedOutput,
  convertToIOutputs,
  fetchAndEncodeOutputImages,
} from '@curvenote/nbtx';

const PERCENT_OF_WINOW = 0.7;

export const NativeJupyterOutputs = ({
  id,
  outputs,
}: {
  id: string;
  outputs: MinifiedOutput[];
}) => {
  if (typeof window === 'undefined') return null;

  const windowSize = useWindowSize();

  const { data, error } = useFetchAnyTruncatedContent(outputs);

  const [loading, setLoading] = useState(true);
  const [frameHeight, setFrameHeight] = useState(0);
  const [clamped, setClamped] = useState(false);

  const uid = useMemo(nanoid, []);

  const height = useSelector((state: State) => selectIFrameHeight(state, uid));
  const rendererReady = useSelector((state: State) => selectIFrameReady(state, uid));

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (iframeRef.current == null || !rendererReady || !data) return;
    fetchAndEncodeOutputImages(convertToIOutputs(data)).then((outputs) => {
      host.commsDispatch(
        iframeRef.current,
        actions.connectHostSendContent(uid, outputs),
      );
    });
  }, [id, iframeRef.current, rendererReady]);

  useEffect(() => {
    if (height == null) return;
    if (height > PERCENT_OF_WINOW * windowSize.height) {
      setFrameHeight(PERCENT_OF_WINOW * windowSize.height);
      setClamped(true);
    } else {
      setFrameHeight(height + 25);
      setClamped(false);
    }
    setLoading(false);
  }, [height]);

  if (error) {
    return <div className="text-red-500">Error rendering output: {error.message}</div>;
  }

  return (
    <div>
      {loading && <div className="p-2.5">Loading...</div>}
      <iframe
        ref={iframeRef}
        id={uid}
        name={uid}
        title={uid}
        src="https://next.curvenote.run"
        width={'100%'}
        height={frameHeight}
        sandbox="allow-scripts"
      ></iframe>
      {clamped && (
        <div>
          <div className="text-center">
            <span
              className="cursor-pointer"
              title="Expand"
              onClick={() => {
                setFrameHeight(height ?? 0);
                setClamped(false);
              }}
            >
              (...)
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
