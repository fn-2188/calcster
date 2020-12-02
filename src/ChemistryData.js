export function SolubilityTable() {
  return (
    <div key="soltable" className="solubility-table table">
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
                CrO<sub>4</sub> <sup>2−</sup>
              </b>{" "}
              (chromate)
            </th>
            <th>
              <b>
                SO<sub>4</sub> <sup>2−</sup>
              </b>{" "}
              (sulfate)
            </th>
            <th>
              <b>
                CH<sub>3</sub>CO<sub>2</sub>
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
      From{" "}
      <a href="http://intro.chem.okstate.edu/1515SP01/Database/Solub.html">
        chem.okstate.edu
      </a>
    </div>
  );
}
export function ActivitySeries() {
  return (
    <div>
      <table className="table">
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
