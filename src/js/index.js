// import "../css/styles.css";
import "../scss/styles.scss";
import { hello } from "./sub";

console.log("index.js");

hello();

window.addEventListener("load", () => {
  console.log("IE11で表示されたらJavaScript Transpile成功");
});
