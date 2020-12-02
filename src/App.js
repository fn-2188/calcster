import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mathjs";
import React, { useState } from "react";
import { evaluateFunction } from "./Math.js";
var Latex = require("react-latex");

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="p-4 bg-warning">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
function VariableEntry(props) {
  let { name, value, mutable } = props;
  return (
    <div className={mutable ? "pl-3 p-1" : "pl-3 p-1 bg-secondary"}>
      <b>{name}</b>={value}
    </div>
  );
}
function EquationCard(props) {
  let { title, equations, cards } = props;
  let equationRows;
  if (equations !== undefined) {
    equationRows = equations.map((x, i) => (
      <div className={x.isEquation ? "equation" : "equation-data"} key={i}>
        <Latex>{x.value}</Latex>
      </div>
    ));
  }
  return (
    <div className="col m-3 d-flex">
      <div className="card p-3 equation-card">
        <h3>{title}</h3>
        <div>
          {cards}
          {equationRows}
        </div>
      </div>
    </div>
  );
}

function OutputTableRow(props) {
  let pointing = props.pointing;
  let { input, result, success } = props.equation;
  return (
    <tr className={success ? "bg-success" : "bg-warning"}>
      <td>{pointing ? "->" : ""}</td>
      <td>{input}</td>
      <td>{result}</td>
    </tr>
  );
}

function OutputTable(props) {
  let { activeIndex, equations } = props;
  let rows = equations.map((x, i) => (
    <OutputTableRow key={i} pointing={activeIndex === i} equation={x} />
  ));
  return (
    <table id="output_table">
      <thead>
        <tr>
          <th>{activeIndex < 0 ? "->" : ""}</th>
          <th>Input</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
function Calculator(props) {
  const [equations, setEquations] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [vars, setVars] = useState(props.variables);
  const [previewResult, setPreviewResult] = useState(" ");
  const [inputValue, setInputValue] = useState("");
  let varEntries = Object.keys(vars).map((key, i) => (
    <VariableEntry
      key={i}
      name={key}
      value={vars[key].value}
      mutable={vars[key].mutable}
    />
  ));
  const handleInputEvent = (event) => {
    if (event.key === "ArrowUp") {
      setActiveIndex(Math.max(activeIndex - 1, -1));
    } else if (event.key === "ArrowDown") {
      setActiveIndex(Math.min(activeIndex + 1, equations.length - 1));
    } else {
      let expr = event.target.value;
      let res = evaluateFunction(expr, true, vars);
      if (event.key === "Enter") {
        if (expr.replace(" ", "").length > 0) {
          if (Object.keys(res.newVars).length > 0) {
            let newVars = { ...vars };
            for (let x in res.newVars) {
              newVars[x] = res.newVars[x];
            }
            setVars(newVars);
          }
          setEquations([
            { input: res.input, result: res.result, success: !res.err },
            ...equations,
          ]);
          setPreviewResult(" ");
          setInputValue("");
        }
      } else {
        if (res.err) {
          setPreviewResult(" ");
        } else {
          setPreviewResult(res.result);
        }
      }
    }
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h2>Calculator</h2>
      <p>
        <b>All Constants:</b>{" "}
        <a
          href="https://mathjs.org/docs/datatypes/units.html#physical-constants"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </p>

      <div className="d-flex justify-content-center flex-wrap">
        <div className="p-2">
          <b>Enter</b> - Calculate Expression
        </div>
        <div className="p-2">
          <b>Assign variable</b> - [Variable] = [Value]
        </div>
        <div className="p-2">
          <b>Convert Unit</b> - x [units] to [other units]{" "}
        </div>
        <div className="p-2">
          <b>&darr;</b> - Go To Previous Calculated Expression
        </div>
        <div className="p-2">
          <b>&uarr;</b> - Go To Next Calculated Expression
        </div>
      </div>

      <div className="container-fluid flex-container">
        <div className="row">
          <div className="col d-flex col-xl-auto col-12 text-white bg-info mb-2">
            <div id="vars" className="justify-content-left">
              {varEntries}
            </div>
          </div>
          <div className="col d-flex col-xl col-12 text-dark mb-2">
            <div id="equations">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Equation</span>
                </div>
                <input
                  type="text"
                  id="console_input"
                  className="form-control input-lg"
                  onChange={handleChange}
                  onKeyUp={handleInputEvent}
                  value={inputValue}
                ></input>
              </div>
              <div id="preview" className="bg-light text-dark">
                {previewResult}
              </div>
            </div>
          </div>
          <div
            className="col d-flex col-xl-4 col-12 text-white bg-dark mb-2"
            id="output"
          >
            <OutputTable equations={equations} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App(props) {
  let { variables } = props;
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand flex-column flex-lg-row navbar-dark bg-primary">
          <p className="navbar-brand">Calcster</p>
        </nav>
      </header>
      <h2 className="mt-3">Equations</h2>
      <main>
        <div className="container-fluid">
          <div id="eqn-parent" className="row">
            <ErrorBoundary>
              <EquationCard
                title="Atomic Absorption and Emission"
                equations={[
                  {
                    value: "$$E_{n} = -2.178*10^{-18} J \\frac{Z^2}{n^2}$$",
                    isEquation: true,
                  },
                  { value: "$$E_{photon}=|\\Delta E|$$", isEquation: true },
                ]}
              />
              <EquationCard
                title="Heisenburg Uncertainty Principle"
                equations={[
                  {
                    value: "$$\\Delta x \\Delta p \\geq \\frac{h}{4 \\pi}$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Light and Energy"
                equations={[
                  { value: "$$E=hv=\\frac{hc}{\\lambda}$$", isEquation: true },
                  {
                    value:
                      "$$E=K + V = \\frac{1}{2}mv^{2}+V(x)=\\frac{p^{2}}{2m}+V(x)$$",
                    isEquation: true,
                  },
                  { value: "$$1J=1kg\\frac{m^{2}}{s^{2}}$$", isEquation: true },
                ]}
              />
              <EquationCard
                title="Particle Wave Duality/de Broglie Wavelength"
                equations={[
                  { value: "$$\\lambda=\\frac{h}{mv}$$", isEquation: true },
                  {
                    value:
                      "$$\\text{If the de Broglie wavelength }\\geq \\text{ size of object, need quantum mechanics to describe it}$$",
                    isEquation: false,
                  },
                ]}
              />
              <EquationCard
                title="Particle in a box"
                equations={[
                  {
                    value: "$$\\psi(x)=Asin(\\frac{nx}{L})$$",
                    isEquation: true,
                  },
                  {
                    value: "$$E=\\frac{n^{2}h^{2}}{8mL^{2}}$$",
                    isEquation: true,
                  },
                  {
                    value: "$$L=\\sqrt{\\frac{n^{2}h^{2}}{8mE}}$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\Delta E = E_{2} - E_{1} =(n_{f}^2-n_{i}^2)(\\frac{h^2}{8mL^2})$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Bonding Energy"
                equations={[
                  {
                    value:
                      "$$\\text{Coulumb's Law: }V=\\frac{Q_{1}Q_{2}}{4\\pi \\epsilon_{0}r}=2.31*10^{-19}\\text{J nm} (\\frac{Q_{1}Q_{2}}{r})$$",
                    isEquation: true,
                  },
                  {
                    value: "$$\\text{1 debye (D)}=3.336*10^{-30} C m$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Bonding Polarity and Dipole Moments"
                equations={[
                  {
                    value:
                      "$$\\text{Dipole moment}=\\mu=QR \\text{ (in Cm or D)}$$",
                    isEquation: true,
                  },
                  {
                    value: "$$\\text{1 debye (D)}=3.336*10^{-30} C m$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Electronegativity"
                equations={[
                  {
                    value:
                      "$$\\text{Expected bond energy}=\\sqrt{(\\text{H-H bond energy})*(\\text{X-X bond energy})}$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\text{Difference}=\\Delta=(H-X)_{actual}-(H-H)_{expected}$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\text{EN(X)}-\\text{EN(H)}=0.102\\sqrt{\\Delta}$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Molar Mass"
                equations={[
                  {
                    value: "$$\\text{mass}=\\text{mols} * \\text{molar mass}$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\text{Mass fraction}=\\frac{\\text{mass/mol of element}}{\\text{mass/mol of molecule}}$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Molarity"
                equations={[
                  { value: "Solute: thing being dissolved", isEquation: true },
                  { value: "Solvent: dissolving medium", isEquation: true },
                  {
                    value:
                      "$$M=\\text{molarity}=\\frac{\\text{moles of solute}}{\\text{liters of solution}}$$",
                    isEquation: true,
                  },
                  { value: "$$M_{1}V_{1}=M_{2}V_{2}$$", isEquation: true },
                ]}
              />
              <EquationCard
                title="Solubility Table"
                cards={[
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Ion</td>
                          <td>Solubility</td>
                          <td>Exceptions</td>
                        </tr>
                        <tr>
                          <td>
                            NO<sub>3</sub>
                            <sup>–</sup>
                          </td>
                          <td>soluble</td>
                          <td>none</td>
                        </tr>
                        <tr>
                          <td>
                            ClO<sub>4</sub>
                            <sup>–</sup>
                          </td>
                          <td>soluble</td>
                          <td>none</td>
                        </tr>
                        <tr>
                          <td>
                            Cl<sup>–</sup>
                          </td>
                          <td>soluble</td>
                          <td>
                            <p>&nbsp;</p>
                            except Ag<sup>+</sup>, Hg<sub>2</sub>
                            <sup>2+</sup>, *Pb<sup>2+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            I<sup>–</sup>
                          </td>
                          <td>soluble</td>
                          <td>
                            except Ag<sup>+</sup>, Hg<sub>2</sub>
                            <sup>2+</sup>, *Pb<sup>2+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            SO<sub>4</sub>
                            <sup>2-</sup>
                          </td>
                          <td>soluble</td>
                          <td>
                            except Ca<sup>2+</sup>, Ba<sup>2+</sup>, Sr
                            <sup>2+</sup>, Hg<sup>2+</sup>, Pb<sup>2+</sup>, Ag
                            <sup>+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            CO<sub>3</sub>
                            <sup>2-</sup>
                          </td>
                          <td>insoluble</td>
                          <td>
                            except Group IA and NH<sub>4</sub>
                            <sup>+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            PO<sub>4</sub>
                            <sup>3-</sup>
                          </td>
                          <td>insoluble</td>
                          <td>
                            except Group IA and NH<sub>4</sub>
                            <sup>+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            OH<sup>–</sup>
                          </td>
                          <td>insoluble</td>
                          <td>
                            except Group IA, *Ca<sup>2+</sup>, Ba<sup>2+</sup>,
                            Sr<sup>2+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            S<sup>2-</sup>
                          </td>
                          <td>insoluble</td>
                          <td>
                            except Group IA, IIA and NH<sub>4</sub>
                            <sup>+</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Na<sup>+</sup>
                          </td>
                          <td>soluble</td>
                          <td>none</td>
                        </tr>
                        <tr>
                          <td>
                            K<sup>+</sup>
                          </td>
                          <td>soluble</td>
                          <td>none</td>
                        </tr>
                        <tr>
                          <td>
                            NH<sub>4</sub>
                            <sup>+</sup>
                          </td>
                          <td>soluble</td>
                          <td>none</td>
                        </tr>
                      </tbody>
                    </table>
                    From{" "}
                    <a href="http://intro.chem.okstate.edu/1515SP01/Database/Solub.html">
                      chem.okstate.edu
                    </a>
                  </div>,
                ]}
              />
            </ErrorBoundary>
          </div>
        </div>
        <ErrorBoundary>
          <Calculator variables={variables} />
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;