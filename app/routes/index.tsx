import type { MetaFunction } from "@remix-run/node";
import { pageTitle } from "~/config/page";

export const meta: MetaFunction = () => ({
  title: pageTitle('Index'),
})

export default function Index() {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.4" }}>
      <h1>Index Page</h1>
      <span>
        This is the first page!
      </span>      
    </div>
  );
}
