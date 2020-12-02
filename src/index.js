import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createUnit } from 'mathjs';

let vars = {
  c: { value: '3e8 m/s', mutable: false },
  h: { value: 'h=(6.626e-34 m^2 kg/s)', mutable: false },
  Ry: { value: 'Ry=2.178e-18 J', mutable: false },
  me: { value: 'me=electronMass', mutable: false },
  amH: { value: 'amH=1.00794 g/mol', mutable: false },
  amC: { value: 'amC=12.0107 g/mol', mutable: false },
  amO: { value: 'amO=15.9994 g/mol', mutable: false },
  amN: { value: '14.0067 g/mol', mutable: false },
  amCl: { value: '35.4527 g/mol', mutable: false },
};

createUnit('cal', '4.184 J');
createUnit('kcal', '1000 cal');
createUnit('D', '3.336e-30 C*m');
createUnit('M', '1 mol/L');

ReactDOM.render(
  <React.StrictMode>
    <App variables={vars} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
