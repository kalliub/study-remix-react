import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { pageTitle } from "~/config/page";

export const meta: MetaFunction = () => ({
  title: pageTitle('Index'),
})

export default function Index() {
  return (
    <div>
      <h1>Index Page</h1>
      <span>
        This is the first page!
      </span>
      <br />
      <ul>
        <li>
          <Link to="/test">Test Page</Link>
        </li>
      </ul>
    </div>
  );
}
