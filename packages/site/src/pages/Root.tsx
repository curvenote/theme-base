import type { DocumentLoader, SiteManifest } from '@curvenote/site-common';
import { SiteProvider, Theme, ThemeProvider } from '@curvenote/ui-providers';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react';
import { Analytics } from '../seo';
import { ErrorSiteNotFound } from './ErrorSiteNotFound';

export function Document({
  children,
  theme,
  config,
  title,
}: {
  children: React.ReactNode;
  theme: Theme;
  config?: SiteManifest;
  title?: string;
}) {
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
        <Analytics analytics={config?.analytics} />
      </head>
      <body className="m-0 transition-colors duration-500 bg-white dark:bg-stone-900">
        <ThemeProvider theme={theme}>
          <SiteProvider config={config}>{children}</SiteProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function App() {
  const { theme, config } = useLoaderData<DocumentLoader>();
  return (
    <Document theme={theme} config={config}>
      <Outlet />
    </Document>
  );
}

export function AppCatchBoundary() {
  const caught = useCatch();
  return (
    <Document theme={Theme.light} title={caught.statusText}>
      <article className="content">
        <main className="error-content">
          <ErrorSiteNotFound />
        </main>
      </article>
    </Document>
  );
}

export function AppDebugErrorBoundary({ error }: { error: { message: string; stack: string } }) {
  return (
    <Document theme={Theme.light} title="Error">
      <div className="mt-16">
        <main className="error-content">
          <h1>An Error Occurred</h1>
          <code>{error.message}</code>
          <pre>{error.stack}</pre>
        </main>
      </div>
    </Document>
  );
}
