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
export function MolecularGeometry(){
  return( <div>
    <table className="table" >
  
    <thead><tr>
    <th scope="col">Atoms bonded to <br />central atom
    </th>
    <th scope="col">Lone pairs
    </th>
    <th scope="col">Electron domains <br />(Steric number)
    </th>
    <th scope="col">Shape
    </th>
    <th scope="col">Ideal bond angle <br />(example's bond angle)
    </th>
    <th scope="col">Example
    </th>
    <th scope="col">Image
    </th></tr></thead><tbody>
    <tr>
    <td>2
    </td>
    <td>0
    </td>
    <td>2
    </td>
    <td >linear
    </td>
    <td>180°
    </td>
    <td>CO<sub>2</sub>
    </td>
    <td><img alt="Linear-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/50px-Linear-3D-balls.png" decoding="async" width="50" height="23" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/75px-Linear-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/100px-Linear-3D-balls.png 2x" data-file-width="1100" data-file-height="508" />
    </td></tr>
    <tr>
    <td>3
    </td>
    <td>0
    </td>
    <td>3
    </td>
    <td >trigonal planar
    </td>
    <td>120°
    </td>
    <td>BF<sub>3</sub>
    </td>
    <td><img alt="Trigonal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Trigonal-3D-balls.png/50px-Trigonal-3D-balls.png" decoding="async" width="50" height="44" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Trigonal-3D-balls.png/75px-Trigonal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/31/Trigonal-3D-balls.png/100px-Trigonal-3D-balls.png 2x" data-file-width="1100" data-file-height="967" />
    </td></tr>
    <tr>
    <td>2
    </td>
    <td>1
    </td>
    <td>3
    </td>
    <td >angular
    </td>
    <td>120° (119°)
    </td>
    <td>SO<sub>2</sub>
    </td>
    <td><img alt="Bent-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/50px-Bent-3D-balls.png" decoding="async" width="50" height="34" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/75px-Bent-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/100px-Bent-3D-balls.png 2x" data-file-width="1100" data-file-height="750" />
    </td></tr>
    <tr>
    <td>4
    </td>
    <td>0
    </td>
    <td>4
    </td>
    <td >tetrahedral
    </td>
    <td>109.5°
    </td>
    <td>CH<sub>4</sub>
    </td>
    <td><img alt="AX4E0-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/AX4E0-3D-balls.png/50px-AX4E0-3D-balls.png" decoding="async" width="50" height="50" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/AX4E0-3D-balls.png/75px-AX4E0-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f4/AX4E0-3D-balls.png/100px-AX4E0-3D-balls.png 2x" data-file-width="1092" data-file-height="1100" />
    </td></tr>
    <tr>
    <td>3
    </td>
    <td>1
    </td>
    <td>4
    </td>
    <td >trigonal pyramidal
    </td>
    <td>109.5 (107.8°)
    </td>
    <td>NH<sub>3</sub>
    </td>
    <td><img alt="Pyramidal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pyramidal-3D-balls.png/50px-Pyramidal-3D-balls.png" decoding="async" width="50" height="40" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pyramidal-3D-balls.png/75px-Pyramidal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pyramidal-3D-balls.png/100px-Pyramidal-3D-balls.png 2x" data-file-width="1100" data-file-height="878" />
    </td></tr>
    <tr>
    <td>2
    </td>
    <td>2
    </td>
    <td>4
    </td>
    <td >angular
    </td>
    <td>109.5° (104.48°)
    </td>
    <td>H<sub>2</sub>O
    </td>
    <td><img alt="Bent-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/50px-Bent-3D-balls.png" decoding="async" width="50" height="34" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/75px-Bent-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bent-3D-balls.png/100px-Bent-3D-balls.png 2x" data-file-width="1100" data-file-height="750" />
    </td></tr>
    <tr>
    <td>5
    </td>
    <td>0
    </td>
    <td>5
    </td>
    <td >trigonal bipyramidal
    </td>
    <td>90°, 120°
    </td>
    <td>PCl<sub>5</sub>
    </td>
    <td><img alt="Trigonal-bipyramidal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trigonal-bipyramidal-3D-balls.png/50px-Trigonal-bipyramidal-3D-balls.png" decoding="async" width="50" height="57" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trigonal-bipyramidal-3D-balls.png/75px-Trigonal-bipyramidal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trigonal-bipyramidal-3D-balls.png/100px-Trigonal-bipyramidal-3D-balls.png 2x" data-file-width="968" data-file-height="1100" />
    </td></tr>
    <tr>
    <td>4
    </td>
    <td>1
    </td>
    <td>5
    </td>
    <td >seesaw
    </td>
    <td>ax–ax 180° (173.1°), <br /> eq–eq 120° (101.6°), <br />ax–eq 90°
    </td>
    <td>SF<sub>4</sub>
    </td>
    <td><img alt="Seesaw-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seesaw-3D-balls.png/50px-Seesaw-3D-balls.png" decoding="async" width="50" height="27" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seesaw-3D-balls.png/75px-Seesaw-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Seesaw-3D-balls.png/100px-Seesaw-3D-balls.png 2x" data-file-width="1100" data-file-height="600" />
    </td></tr>
    <tr>
    <td>3
    </td>
    <td>2
    </td>
    <td>5
    </td>
    <td >T-shaped
    </td>
    <td>90° (87.5°), 180° (175°)
    </td>
    <td>ClF<sub>3</sub>
    </td>
    <td><img alt="T-shaped-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/T-shaped-3D-balls.png/50px-T-shaped-3D-balls.png" decoding="async" width="50" height="37" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/b9/T-shaped-3D-balls.png/75px-T-shaped-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/b9/T-shaped-3D-balls.png/100px-T-shaped-3D-balls.png 2x" data-file-width="1100" data-file-height="805" />
    </td></tr>
    <tr>
    <td>2
    </td>
    <td>3
    </td>
    <td>5
    </td>
    <td >linear
    </td>
    <td>180°
    </td>
    <td>XeF<sub>2</sub>
    </td>
    <td><img alt="Linear-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/50px-Linear-3D-balls.png" decoding="async" width="50" height="23" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/75px-Linear-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Linear-3D-balls.png/100px-Linear-3D-balls.png 2x" data-file-width="1100" data-file-height="508" />
    </td></tr>
    <tr>
    <td>6
    </td>
    <td>0
    </td>
    <td>6
    </td>
    <td >octahedral
    </td>
    <td>90°, 180°
    </td>
    <td>SF<sub>6</sub>
    </td>
    <td><img alt="AX6E0-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/52/AX6E0-3D-balls.png/50px-AX6E0-3D-balls.png" decoding="async" width="50" height="53" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/52/AX6E0-3D-balls.png/75px-AX6E0-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/52/AX6E0-3D-balls.png/100px-AX6E0-3D-balls.png 2x" data-file-width="1035" data-file-height="1100" />
    </td></tr>
    <tr>
    <td>5
    </td>
    <td>1
    </td>
    <td>6
    </td>
    <td >square pyramidal
    </td>
    <td>90° (84.8°)
    </td>
    <td>BrF<sub>5</sub>
    </td>
    <td><img alt="Square-pyramidal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square-pyramidal-3D-balls.png/50px-Square-pyramidal-3D-balls.png" decoding="async" width="50" height="41" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square-pyramidal-3D-balls.png/75px-Square-pyramidal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square-pyramidal-3D-balls.png/100px-Square-pyramidal-3D-balls.png 2x" data-file-width="1100" data-file-height="891" />
    </td></tr>
    <tr>
    <td>4
    </td>
    <td>2
    </td>
    <td>6
    </td>
    <td >square planar
    </td>
    <td>90°, 180°
    </td>
    <td>XeF<sub>4</sub>
    </td>
    <td><img alt="Square-planar-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Square-planar-3D-balls.png/50px-Square-planar-3D-balls.png" decoding="async" width="50" height="36" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Square-planar-3D-balls.png/75px-Square-planar-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Square-planar-3D-balls.png/100px-Square-planar-3D-balls.png 2x" data-file-width="1100" data-file-height="796" />
    </td></tr>
    <tr>
    <td>7
    </td>
    <td>0
    </td>
    <td>7
    </td>
    <td >pentagonal bipyramidal
    </td>
    <td>90°, 72°, 180°
    </td>
    <td>IF<sub>7</sub>
    </td>
    <td><img alt="Pentagonal-bipyramidal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pentagonal-bipyramidal-3D-balls.png/50px-Pentagonal-bipyramidal-3D-balls.png" decoding="async" width="50" height="50" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pentagonal-bipyramidal-3D-balls.png/75px-Pentagonal-bipyramidal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pentagonal-bipyramidal-3D-balls.png/100px-Pentagonal-bipyramidal-3D-balls.png 2x" data-file-width="1100" data-file-height="1096" />
    </td></tr>
    <tr>
    <td>6
    </td>
    <td>1
    </td>
    <td>7
    </td>
    <td >pentagonal pyramidal
    </td>
    <td>72°, 90°, 144°
    </td>
    <td>XeOF<sub>5</sub><sup>−</sup>
    </td>
    <td><img alt="Pentagonal-pyramidal-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pentagonal-pyramidal-3D-balls.png/50px-Pentagonal-pyramidal-3D-balls.png" decoding="async" width="50" height="37" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pentagonal-pyramidal-3D-balls.png/75px-Pentagonal-pyramidal-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pentagonal-pyramidal-3D-balls.png/100px-Pentagonal-pyramidal-3D-balls.png 2x" data-file-width="1100" data-file-height="816" />
    </td></tr>
    <tr>
    <td>5
    </td>
    <td>2
    </td>
    <td>7
    </td>
    <td >pentagonal planar
    </td>
    <td>72°, 144°
    </td>
    <td>XeF<sub>5</sub><sup>−</sup>
    </td>
    <td><img alt="Pentagonal-planar-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pentagonal-planar-3D-balls.png/50px-Pentagonal-planar-3D-balls.png" decoding="async" width="50" height="31" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pentagonal-planar-3D-balls.png/75px-Pentagonal-planar-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pentagonal-planar-3D-balls.png/100px-Pentagonal-planar-3D-balls.png 2x" data-file-width="2000" data-file-height="1229" />
    </td></tr>
    <tr>
    <td>8
    </td>
    <td>0
    </td>
    <td>8
    </td>
    <td >square antiprismatic
    </td>
    <td>
    </td>
    <td>XeF<sub>8</sub><sup>2−</sup>
    </td>
    <td><img alt="Square-antiprismatic-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Square-antiprismatic-3D-balls.png/50px-Square-antiprismatic-3D-balls.png" decoding="async" width="50" height="44" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Square-antiprismatic-3D-balls.png/75px-Square-antiprismatic-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Square-antiprismatic-3D-balls.png/100px-Square-antiprismatic-3D-balls.png 2x" data-file-width="2000" data-file-height="1769" />
    </td></tr>
    <tr>
    <td>9
    </td>
    <td>0
    </td>
    <td>9
    </td>
    <td >tricapped trigonal prismatic
    </td>
    <td>
    </td>
    <td>ReH<sub>9</sub><sup>2−</sup>
    </td>
    <td><img alt="AX9E0-3D-balls.png" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/AX9E0-3D-balls.png/50px-AX9E0-3D-balls.png" decoding="async" width="50" height="54" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/AX9E0-3D-balls.png/75px-AX9E0-3D-balls.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4d/AX9E0-3D-balls.png/100px-AX9E0-3D-balls.png 2x" data-file-width="1865" data-file-height="2000" />
    </td></tr></tbody><tfoot></tfoot></table>
    From{" "}
      <a href="https://en.wikipedia.org/wiki/Molecular_geometry">Wikipedia</a>
  </div>);
}