import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { formatResult, evaluateFunction } from "./Math";
import {
  MolecularGeometry,
  ActivitySeries,
  SolubilityTable,
  FormalChargeExample,
  Electrolytes,
} from "./ChemistryData";
var Latex = require("react-latex");
const arrow = <span>&rarr;</span>;
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
      <b>{name}</b>={value.toString()}
    </div>
  );
}
function EquationCard(props) {
  let { title, equations, cards, xl, open } = props;
  let equationRows;
  const [collapsed, setCollapsed] = useState(!open);
  if (!collapsed && equations !== undefined) {
    equationRows = equations.map((x, i) => (
      <div className={x.isEquation ? "equation" : "equation-data"} key={i}>
        <Latex>{x.value}</Latex>
      </div>
    ));
  }
  if (collapsed) {
    cards = undefined;
  }
  const onClick = () => {
    setCollapsed(!collapsed);
  };
  let toggleButton = (
    <button
      type="button"
      className="close collapse-button"
      aria-label="Close"
      onClick={onClick}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );

  return (
    <ErrorBoundary>
      <div
        onClick={collapsed ? onClick : undefined}
        className={
          xl
            ? "col-sm-12 col-md-12 col-xl-8 p-1"
            : "col-sm-12 col-md-6 col-xl-4 p-1"
        }
      >
        <div
          className={
            (collapsed ? "open-button " : "") + "card p-1 equation-card"
          }
        >
          {!collapsed ? toggleButton : undefined}
          <h3 className="ml-3 d-inline">{title}</h3>
          <div>
            {cards}
            {equationRows}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

function OutputTableRow(props) {
  let pointing = props.pointing;
  let { input, result, success } = props.equation;
  return (
    <tr className={success ? "bg-success" : "bg-warning"}>
      <td>{pointing ? arrow : ""}</td>
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
          <th>{activeIndex < 0 ? arrow : ""}</th>
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
  const [typedEquation, setTypedEquation] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [vars, setVars] = useState(props.variables);
  const [inputValue, setInputValue] = useState("");
  let varEntries = Object.keys(vars)
    .filter((v) => !vars[v].hide)
    .map((key, i) => (
      <VariableEntry
        key={i}
        name={key}
        value={vars[key].value}
        mutable={vars[key].mutable}
      />
    ));
  const handleInputEvent = (event) => {
    if (event.key === "ArrowUp") {
      let newIndex = Math.max(activeIndex - 1, -1);
      setActiveIndex(newIndex);
      setInputValue(newIndex >= 0 ? equations[newIndex].input : typedEquation);
    } else if (event.key === "ArrowDown") {
      let newIndex = Math.min(activeIndex + 1, equations.length - 1);
      setActiveIndex(newIndex);
      setInputValue(newIndex >= 0 ? equations[newIndex].input : typedEquation);
    } else {
      let expr = event.target.value;
      setActiveIndex(-1);
      if (event.key === "Enter") {
        let res = evaluateFunction(expr, true, vars);
        if (expr.replace(" ", "").length > 0) {
          let newVars = {};
          if (Object.keys(res.newVars).length > 0) {
            for (let x in res.newVars) {
              newVars[x] = res.newVars[x];
            }
          }
          if (!res.err) {
            newVars.ans = { value: res.result, mutable: false };
          }
          if (Object.keys(newVars).length > 0) {
            setVars({ ...vars, ...newVars });
          }
          setEquations([
            {
              input: res.input,
              result: formatResult(res.result),
              success: !res.err,
            },
            ...equations,
          ]);
          setInputValue("");
        }
      } else {
        setTypedEquation(expr);
      }
    }
  };
  let previewResult = "";
  if (inputValue.length > 0) {
    let res = evaluateFunction(inputValue, true, vars);
    if (!res.err) {
      previewResult = formatResult(res.result);
    }
  }
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
                  autoComplete="off"
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
          <div id="eqn-parent" className="d-flex flex-wrap">
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
                title="Heisenberg Uncertainty Principle"
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
                  {
                    value:
                      "$$\\text{\\% ionic character}=\\frac{\\text{measured dipole moment}}{\\text{expected dipole moment}}$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Formal Charge"
                cards={[<FormalChargeExample />]}
                equations={[
                  {
                    value:
                      "$$\\sum (\\text{formal charges}) = \\text{overall charge}$$",
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
                xl={true}
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
                cards={[<SolubilityTable key="st" />]}
                xl={true}
              />
              <EquationCard
                title="Activity Series"
                cards={[<ActivitySeries key="as" />]}
              />
              <EquationCard
                title="VSEPR/Molecular Geometry"
                equations={[
                  {
                    value:
                      "A = central atom, X = attached atoms, E = lone pairs on central atom",
                    isEquation: true,
                  },
                ]}
                cards={[<MolecularGeometry key="mg" />]}
                xl={true}
              />
              <EquationCard
                title="Reaction Rate"
                equations={[
                  {
                    value:
                      "Under conditions where reverse reaction can be neglected",
                    isEquation: false,
                  },
                  {
                    value:
                      "$$\\text{Avg Rate}=|\\frac{\\Delta[A]}{\\Delta t}|$$",
                    isEquation: true,
                  },
                  {
                    value: "A is specific reactant or product",
                    isEquation: false,
                  },
                  {
                    value:
                      "$$\\text{Differential rate law}=k[Reactant]^{x}[Reactant]^{y}$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\text{Integrated rate law}=ln\\frac{[A]}{[A]_{0}}=-kt$$",
                    isEquation: true,
                  },
                  {
                    value:
                      "$$\\text{Rate of reaction}=-\\frac{1}{a}\\frac{d[A]}{dt}=-\\frac{1}{b}\\frac{d[B]}{dt}=\\frac{1}{c}\\frac{d[C]}{dt}=\\frac{1}{d}\\frac{d[D]}{dt}$$",
                    isEquation: true,
                  },
                ]}
              />
              <EquationCard
                title="Electrolytes"
                cards={[<Electrolytes key="el" />]}
                xl={true}
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
