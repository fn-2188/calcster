import React from "react";
var Latex = require("react-latex");
export function RateLawSummary() {
  return (
    <div>
      <h4>Summary</h4>
      <table className="table">
        <tbody>
          <tr>
            <th>Reaction:</th>
            <td>
              <Latex>$$a A + bB &rarr; cC +dD$$</Latex>
            </td>
          </tr>
          <tr>
            <th>Rate of Reaction:</th>
            <td>
              Rate ={" "}
              {
                <Latex>
                  {
                    "$$\\text=-\\frac{1}{a}\\frac{d[A]}{dt}=-\\frac{1}{b}\\frac{d[B]}{dt}=\\frac{1}{c}\\frac{d[C]}{dt}=\\frac{1}{d}\\frac{d[D]}{dt}$$"
                  }
                </Latex>
              }
            </td>
          </tr>
          <tr>
            <th>Differential Rate Law</th>
            <td>
              <Latex>
                {
                  "$$\\text{Differential rate law}=k[Reactant]^{x}[Reactant]^{y}$$"
                }
              </Latex>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>0 Order Reactions (x=0)</h4>
      <table className="table">
        <tr>
          <th>Reaction</th>
          <td>aA &rarr; products</td>
        </tr>
        <tr>
          <th>Rate of consumption of A</th>
          <td>
            <Latex>{"$$Rate=-\\frac{d[A]}{dt}=k[A]$$"}</Latex>
          </td>
        </tr>
        <tr>
          <th>Integrated rate law</th>
          <td>
          <Latex>{"$$[A]=-kt+[A]_{0}$$"}</Latex>
          </td>
        </tr>
      </table>
      <h4>1st Order Reactions (x=1)</h4>
      <table className="table">
        <tr>
          <th>Reaction</th>
          <td>aA &rarr; products</td>
        </tr>
        <tr>
          <th>Rate of consumption of A</th>
          <td>
            <Latex>{"$$Rate=-\\frac{d[A]}{dt}=k[A]$$"}</Latex>
          </td>
        </tr>
        <tr>
          <th>Integrated rate law</th>
          <td>
            <Latex>{"$$[A]_t=[A]_{0}e^{-kt}$$"}</Latex>
            <br />
            <Latex>{"$$ln(\\frac{[A]}{[A]_{0}})=-kt$$"}</Latex>
            <br />
            <Latex>{"$$ln[A]=-kt+ln[A]_{0}$$"}</Latex>
          </td>
        </tr>
        <tr>
          <th>Half Life</th>
          <td>
              <Latex>{"$$t_{\\frac{1}{2}}=\\frac{ln(2)}{k}$$"}</Latex>
          </td>
        </tr>
      </table>
      <h4>2nd Order Reactions (x=2)</h4>
      <table className="table">
        <tr>
          <th>Reaction</th>
          <td>aA &rarr; products</td>
        </tr>
        <tr>
          <th>Rate of consumption of A</th>
          <td>
            <Latex>{"$$Rate=-\\frac{d[A]}{dt}=k[A]^{2}$$"}</Latex>
          </td>
        </tr>
        <tr>
          <th>Integrated rate law</th>
          <td>
            <Latex>{"$$\\frac{1}{[A]}=kt+\\frac{1}{[A]_{0}}$$"}</Latex>
          </td>
        </tr>
      </table>
    </div>
  );
}
