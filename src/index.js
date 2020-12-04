import "react-app-polyfill/ie9";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createUnit, evaluate } from "mathjs";
import { periodicTableData } from "./PeriodicTableData";
let vars = {
  c: { value: evaluate("3e8 m/s"), mutable: false },
  h: { value: evaluate("(6.626e-34 m^2 kg/s)"), mutable: false },
  Ry: { value: evaluate("2.178e-18 J"), mutable: false },
  me: { value: evaluate("electronMass"), mutable: false },
};
periodicTableData.forEach((element) => {
  if (element.hasOwnProperty("atomicMass")) {
    vars[`am${element.symbol}`] = {
      value: evaluate(`${element.atomicMass} g/mol`),
      mutable: false,
      hide: true,
    };
  }
});

createUnit("cal", "4.184 J");
createUnit("kcal", "1000 cal");
createUnit("D", "3.336e-30 C*m");
createUnit("M", "1 mol/L");

ReactDOM.render(
  <React.StrictMode>
    <App variables={vars} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
