import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import ErrorAlert from 'components/ErrorAlert';
import { pageTitle } from 'config/page';
import styles from 'styles/root.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;

export const ErrorBoundary = ({ error }: { error: Error }) => (
  <html lang="en">
    <head>
      <title>{pageTitle('Error')}</title>
      <Meta />
      <Links />
    </head>
    <body>
      <ErrorAlert
        title="Generic Error!"
        body={`[${error.name}] ${error.message}`}
      />
      <Scripts />
    </body>
  </html>
);
