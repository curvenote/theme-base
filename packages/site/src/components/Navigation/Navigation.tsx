import { useNavOpen } from '@curvenote/ui-providers';
import { TableOfContents } from './TableOfContents';

export function Navigation({
  children,
  projectSlug,
  urlbase,
  top,
  height,
  hide_toc,
}: {
  children?: React.ReactNode;
  urlbase?: string;
  projectSlug?: string;
  top?: number;
  height?: number;
  hide_toc?: boolean;
}) {
  const [open, setOpen] = useNavOpen();
  if (hide_toc) return <>{children}</>;
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {children}
      <TableOfContents projectSlug={projectSlug} urlbase={urlbase} top={top} height={height} />
    </>
  );
}
