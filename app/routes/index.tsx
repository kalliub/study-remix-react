import React from 'react';
import type { MetaFunction } from '@remix-run/node';

import { pageTitle } from 'config/page';

export const meta: MetaFunction = () => ({
  title: pageTitle('Index'),
});

const Index = () => {
  return (
    <div>
      <h1>Index page</h1>
      <span>This is the first page!</span>
      <br />
      <ul>
        <li>
          <a data-testid="testPageLink" href="/test">
            Test Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
