import { h, render } from "preact";
import { setup } from "goober";

import { App } from "./pages/app";

setup(h);

render(<App></App>, document.body);
