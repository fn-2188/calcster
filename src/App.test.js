import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createUnit, evaluate } from "mathjs";

let vars = {
  c: { value: evaluate("3e8 m/s"), mutable: false },
  h: { value: evaluate("(6.626e-34 m^2 kg/s)"), mutable: false },
  Ry: { value: evaluate("2.178e-18 J"), mutable: false },
  me: { value: evaluate("electronMass"), mutable: false },
  amH: { value: evaluate("1.00794 g/mol"), mutable: false },
  amC: { value: evaluate("12.0107 g/mol"), mutable: false },
  amO: { value: evaluate("15.9994 g/mol"), mutable: false },
  amN: { value: evaluate("14.0067 g/mol"), mutable: false },
  amCl: { value: evaluate("35.4527 g/mol"), mutable: false },
};

createUnit("cal", "4.184 J");
createUnit("kcal", "1000 cal");
createUnit("D", "3.336e-30 C*m");
createUnit("M", "1 mol/L");

it("renders without crashing", () => {
  ReactDOM.render(
    <React.StrictMode>
      <App variables={vars} />
    </React.StrictMode>,
    document.createElement("div")
  );
});
