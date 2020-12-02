import React, { useState } from "react";

const originalTable = (
  <table>
    <thead>
      <tr>
        <th></th>
        <th className="first">
          <b>
            Cl<sup>−</sup>
          </b>{" "}
          (chloride)
        </th>
        <th>
          <b>
            Br<sup>−</sup>
          </b>{" "}
          (bromide)
        </th>
        <th>
          <b>
            I<sup>−</sup>
          </b>{" "}
          (iodide)
        </th>

        <th>
          <b>
            O<sup>2−</sup>
          </b>{" "}
          (oxide)
        </th>
        <th>
          <b>
            S<sup>2−</sup>
          </b>{" "}
          (sulfide)
        </th>
        <th>
          <b>
            OH<sup>−</sup>
          </b>{" "}
          (hydroxide)
        </th>
        <th>
          <b>
            CO<sub>3</sub>
            <sup>2−</sup>
          </b>{" "}
          (carbonate)
        </th>

        <th>
          <b>
            CrO<sub>4</sub>
            <sup>2−</sup>
          </b>{" "}
          (chromate)
        </th>
        <th>
          <b>
            SO<sub>4</sub>
            <sup>2−</sup>
          </b>{" "}
          (sulfate)
        </th>
        <th>
          <b>
            CH<sub>3</sub>
            <sup>−</sup>
          </b>{" "}
          (acetate)
        </th>

        <th className="last">
          <b>
            NO<sub>3</sub>
            <sup>−</sup>
          </b>{" "}
          (nitrate)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          NH<sub>4</sub>
          <sup>+</sup>
        </td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td>N/A</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Na<sup>+</sup>
        </td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-primary">REACT</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          K<sup>+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-primary">REACT</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Mg<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>

        <td className="bg-primary">REACT</td>
        <td className="bg-danger">NO</td>
        <td className="bg-warning">SLIGHT</td>
        <td>N/A</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Ca<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-primary">REACT</td>
        <td className="bg-primary">REACT</td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-danger">NO</td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-warning">SLIGHT</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Ba<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Mn<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td>N/A</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Fe<sup>2+</sup>
        </td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td>N/A</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Fe<sup>3+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td>N/A</td>
        <td className="bg-danger">NO</td>
        <td>N/A</td>

        <td className="bg-danger">NO</td>
        <td>N/A</td>
        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Cu<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td>N/A</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Ni<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Cd<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Zn<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Sn<sup>2+</sup>
        </td>

        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td>N/A</td>
        <td>N/A</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
        <td className="nodatalast">N/A</td>
      </tr>
      <tr>
        <td>
          Hg<sup>2+</sup>
        </td>
        <td className="bg-success">YES</td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-primary">REACT</td>
        <td className="bg-success">YES</td>
        <td className="bg-success">YES</td>
      </tr>
      <tr>
        <td>
          Pb<sup>2+</sup>
        </td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-warning">SLIGHT</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-success">YES</td>

        <td className="bg-success">YES</td>
      </tr>
      <tr className="last">
        <td>
          Ag<sup>+</sup>
        </td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>

        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td>N/A</td>
        <td className="bg-danger">NO</td>
        <td className="bg-danger">NO</td>
        <td className="bg-warning">SLIGHT</td>

        <td className="bg-warning">SLIGHT</td>
        <td className="bg-success">YES</td>
      </tr>
    </tbody>
  </table>
);

export function SolubilityTable() {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <div key="soltable" className="solubility-table table">
      <button className="btn btn-primary" onClick={onClick}>
        {expand ? "Hide old table" : "Show old table"}
      </button>
      {expand ? originalTable : undefined}
      <table className="table solubility-table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>
              <b>
                F<sup>−</sup>
              </b>
              <br />
              (Fluoride)
            </th>
            <th>
              <b>
                Cl<sup>−</sup>
              </b>
              <br />
              (Chloride)
            </th>
            <th>
              <b>
                Br<sup>−</sup>
              </b>
              <br />
              (Bromide)
            </th>
            <th>
              <b>
                I<sup>−</sup>
              </b>
              <br />
              (Iodide)
            </th>
            <th>
              <b>
                CO<sub>3</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Carbonate)
            </th>
            <th>
              <b>
                ClO<sub>3</sub>
                <sup>−</sup>
              </b>
              <br />
              (Chlorate)
            </th>
            <th>
              <b>
                OH<sup>−</sup>
              </b>
              <br />
              (Hydroxide)
            </th>
            <th>
              <b>
                CN<sup>−</sup>
              </b>
              <br />
              (Cyanide)
            </th>
            <th>
              <b>
                OCN<sup>−</sup>
              </b>
              <br />
              (Cyanate)
            </th>
            <th>
              <b>
                SCN<sup>−</sup>
              </b>
              <br />
              (Thiocyanate)
            </th>
            <th>
              <b>
                NO<sub>3</sub>
                <sup>−</sup>
              </b>
              <br />
              (Nitrate)
            </th>
            <th>
              <b>
                O<sup>2−</sup>
              </b>
              <br />
              (Oxide)
            </th>
            <th>
              <b>
                PO<sub>4</sub>
                <sup>3−</sup>
              </b>
              <br />
              (Phosphate)
            </th>
            <th>
              <b>
                SO<sub>4</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Sulfate)
            </th>
            <th>
              <b>
                Cr<sub>2</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Dichromate)
              <sup></sup>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <b>
                Ca<sup>2+</sup>
              </b>{" "}
              (Calcium)
            </th>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-danger">I</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Li<sup>+</sup>
              </b>{" "}
              (Lithium)
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Na<sup>+</sup>
              </b>{" "}
              (Sodium)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                K<sup>+</sup>
              </b>{" "}
              (Potassium)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                NH<sub>4</sub>
                <sup>+</sup>
              </b>{" "}
              (Ammonium)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S*</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Sr<sup>2+</sup>
              </b>{" "}
              (Strontium)
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-warning">sS</td>
            <td className="bg-danger">I</td>
            <td>?</td>
          </tr>
          <tr>
            <th>
              <b>
                Ba<sup>2+</sup>
              </b>{" "}
              (Barium)
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td>?</td>
          </tr>
          <tr>
            <th>
              <b>
                Be<sup>2+</sup>
              </b>{" "}
              (Beryllium)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-info">R</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td>?</td>
          </tr>
          <tr>
            <th>
              <b>
                c Mg<sup>2+</sup>
              </b>{" "}
              (Magnesium)
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Zn<sup>2+</sup>
              </b>{" "}
              (Zinc)
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              Ni
              <b>
                <sup>2+</sup>
              </b>{" "}
              (Nickel(II))
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td>?</td>
          </tr>
          <tr>
            <th>
              <b>
                Fe<sup>2+</sup>
              </b>{" "}
              (Iron(II))
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Cu<sup>2+</sup>
              </b>{" "}
              (Copper(II))
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td>N/A</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Al<sup>3+</sup>
              </b>{" "}
              (Aluminium)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S (partial electrolysis)</td>
            <td className="bg-info">R</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-info">R</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Fe<sup>3+</sup>
              </b>{" "}
              (Iron(III))
            </th>
            <td>N/A</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td>N/A</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Pb<sup>2+</sup>
              </b>{" "}
              (Lead(II))
            </th>
            <td className="bg-warning">sS</td>
            <td className="bg-warning">sS</td>
            <td className="bg-warning">sS</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-warning">sS</td>
            <td>?</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td>?</td>
          </tr>
          <tr>
            <th>
              <b>
                Ag<sup>+</sup>
              </b>{" "}
              (Silver)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
            <td className="bg-warning">sS</td>
            <td className="bg-danger">I</td>
            <td className="bg-warning">sS</td>
            <td className="bg-success">S</td>
          </tr>
          <tr>
            <th>
              <b>
                Au<sup>+</sup>
              </b>{" "}
              (Gold)
            </th>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td className="bg-danger">I</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td className="bg-success">S</td>
            <td className="bg-danger">I</td>
            <td>?</td>
            <td className="bg-success">S</td>
            <td>?</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>&nbsp;</th>
            <th>
              <b>
                F<sup>−</sup>
              </b>
              <br />
              (Fluoride)
            </th>
            <th>
              <b>
                Cl<sup>−</sup>
              </b>
              <br />
              (Chloride)
            </th>
            <th>
              <b>
                Br<sup>−</sup>
              </b>
              <br />
              (Bromide)
            </th>
            <th>
              <b>
                I<sup>−</sup>
              </b>
              <br />
              (Iodide)
            </th>
            <th>
              <b>
                CO<sub>3</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Carbonate)
            </th>
            <th>
              <b>
                ClO<sub>3</sub>
                <sup>−</sup>
              </b>
              <br />
              (Chlorate)
            </th>
            <th>
              <b>
                OH<sup>−</sup>
              </b>
              <br />
              (Hydroxide)
            </th>
            <th>
              <b>
                CN<sup>−</sup>
              </b>
              <br />
              (Cyanide)
            </th>
            <th>
              <b>
                OCN<sup>−</sup>
              </b>
              <br />
              (Cyanate)
            </th>
            <th>
              <b>
                SCN<sup>−</sup>
              </b>
              <br />
              (Thiocyanate)
            </th>
            <th>
              <b>
                NO<sub>3</sub>
                <sup>−</sup>
              </b>
              <br />
              (Nitrate)
            </th>
            <th>
              <b>
                O<sup>2−</sup>
              </b>
              <br />
              (Oxide)
            </th>
            <th>
              <b>
                PO<sub>4</sub>
                <sup>3−</sup>
              </b>
              <br />
              (Phosphate)
            </th>
            <th>
              <b>
                SO<sub>4</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Sulfate)
            </th>
            <th>
              <b>
                Cr<sub>2</sub>
                <sup>2−</sup>
              </b>
              <br />
              (Dichromate)
            </th>
          </tr>
        </tfoot>
      </table>
      From{" "}
      <a href="https://en.wikipedia.org/wiki/Solubility_chart">Wikipedia</a>
    </div>
  );
}
export function ActivitySeries() {
  return (
    <div>
      <table className="activity-table table">
        <thead>
          <tr>
            <th scope="col">Element</th>
            <th scope="col">Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Li</td>
            <td>Highest</td>
          </tr>
          <tr>
            <td>K</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Ca</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Na</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Mg</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Al</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Mn</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Zn</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Cr</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Fe</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Ni</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Sn</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Pb</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>
              <b>H</b>
            </td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Cu</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Ag</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Pd</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Hg</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Pt</td>
            <td>&uarr;</td>
          </tr>
          <tr>
            <td>Au</td>
            <td>Lowest</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
