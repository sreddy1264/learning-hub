import { render } from "solid-js/web";
import Counter from './Counter';
// import Test from 'remote/Test';

import "./index.css";

const App = () => (
  <div class="container">
    <div>Name: host</div>
    <div>Framework: solid-js</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Counter />
    {/* <Test /> */}
  </div>
);
render(App, document.getElementById("app"));
