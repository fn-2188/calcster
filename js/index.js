'use strict';

let math_input = document.querySelector("#console_input");
let math_preview = document.querySelector("#preview");
let output_table = document.querySelector("#output_table");
let defaultOutputArrowCell = document.querySelector("#output_table th");
let math_vars = document.querySelector("#vars");
let eqnParent = document.querySelector("#eqn-parent");
let expr_index = -1;
let expressions = [];
let vars = {};
let immutables = [];
let temp_expr = undefined;

math_preview.innerHTML = '<br>';
function evaluate(expr, add_vars, mutable) {
    let added_vars = [];
    let modified_expr = expr;
    try {
        let result = undefined;

        if (expr.includes('=')) {
            let args = expr.split('=');
            if (args.length > 2) {
                throw new Error("Multiple equal (=) signs!");
            }
            let v = args[0].replace(' ', '');
            if (immutables.includes(v)) {
                throw new Error("Cannot change this value, it is a constant.");
            }
            if (v === 'm') {
                throw new Error("Err, assigned m");
            }
            modified_expr = args[1];
            if (add_vars) {
                if (!mutable) {
                    immutables.push(v);
                }
                added_vars.push(v);
            }
        }
        // for (let v in vars) {
        //     if (modified_expr.includes(v)) {
        //         modified_expr = modified_expr.replace(v, '(' + vars[v] + ')');
        //     }
        // }
        result = math.evaluate(modified_expr, vars);
        added_vars.forEach(function (v) {
            vars[v] = result;
        });
        if (add_vars) {
            vars['ans'] = result;
        }
        return {
            err: false,
            res: result,
            eval_expr: modified_expr,
            added_vars: added_vars
        };
    } catch (error) {
        return { err: true, eval_expr: modified_expr, res: error.message, added_vars: added_vars };
    }
}
function createVar(name, value) {
    let p = document.createElement('div');
    p.classList.add('p-1');
    p.innerHTML = '<b>' + name + '</b>=' + value;
    return p;
}
function createCard(parent, title, eqns) {
    let res = document.createElement('div');
    res.classList.add('col', 'm-3', 'd-flex', 'col');
    let div1 = document.createElement('div');
    div1.classList.add('card', 'p-3', 'equation-card');
    let h = document.createElement('h3');
    let p = document.createElement('p');
    eqns.forEach(function (eq, i) {
        p.innerHTML += '$$' + eq + '$$';
        if (i != eqns.length - 1) {
            p.innerHTML += '<br>';
        }
    });
    h.textContent = title;
    res.appendChild(div1);
    div1.appendChild(h);
    div1.appendChild(p);
    parent.appendChild(res);
}
function refresh_vars() {
    math_vars.innerHTML = '';
    for (let v in vars) {
        math_vars.appendChild(createVar(v, vars[v]));
    }
}
function recall_expr(up) {
    if (expr_index < 0) {
        temp_expr = math_input.value;
    }
    expr_index = Math.max(Math.min(up ? expr_index + 1 : expr_index - 1, expressions.length - 1), -1);
    if (expr_index >= 0) {
        math_input.value = expressions[expr_index].expr;
    } else {
        math_input.value = temp_expr;
    }
    updateHistory();
}

function log_expr(err, eval_input, expr, res) {
    let row = output_table.insertRow(1);
    if (err) {
        row.classList.add('bg-warning');
    } else {
        row.classList.add('bg-success');
    }
    expressions.unshift({ expr: eval_input, res: res, row: row });
    expr_index = -1;
    temp_expr = undefined;
    let rPtr = row.insertCell();
    let rInput = row.insertCell();
    //let rExp = row.insertCell();
    // let rExpButton = rExp.createElement('button');
    // rExpButton.onclick = () => {recall_expr}
    let rRes = row.insertCell();
    rInput.innerHTML = eval_input;
    //rExp.innerHTML = expr;
    rRes.innerHTML = res;
    updateHistory();
}
function updateHistory() {
    expressions.forEach(function (exp) {
        exp.row.cells[0].innerHTML = '';
    });
    if (expr_index >= 0) {
        expressions[expr_index].row.cells[0].innerHTML = '&rarr;';
        defaultOutputArrowCell.innerHTML = "";
    } else {
        defaultOutputArrowCell.innerHTML = "&rarr;";
    }
}
function togglePreview(msg) {
    math_preview.innerHTML = msg;
}

function setExpression(val) {
    math_input.value = val;
    // math_input.dispatchEvent({key: '4'});
}

math_input.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        let expr = math_input.value;
        let res = evaluate(expr, true, true);
        log_expr(res.err, expr, res.eval_expr, res.res);
        refresh_vars();
        if (!res.err) {
            math_input.value = '';
        }
        togglePreview('<br>');
    } else if (event.key == "ArrowUp") {
        recall_expr(false);
    } else if (event.key == "ArrowDown") {
        recall_expr(true);
    } else {
        let res = evaluate(math_input.value, false, true);
        if (res.err) {
            togglePreview('<br>');
        }
        else {
            togglePreview(res.res);
        }
    }
});
createCard(eqnParent, "Atomic Absorption and Emission",
    ['E_{n} = -2.178*10^{-18} J \\frac{Z^2}{n^2}',
        'E_{photon}=|\\Delta E|']);
        createCard(eqnParent, "Relative and Absolute Error", ['\\text{Absolute Error}=measured-literature', '\\text{Relative Error}=\\frac{measured-literature}{literature}'])
createCard(eqnParent, "Heisenburg Uncertainty Principle",
    ['\\Delta x \\Delta p \\geq \\frac{h}{4 \\pi}']);
createCard(eqnParent, "Light and Energy",
    ['E=hv=\\frac{hc}{\\lambda}',
        'E=K + V = \\frac{1}{2}mv^{2}+V(x)=\\frac{p^{2}}{2m}+V(x)', '1J=1kg\\frac{m^{2}}{s^{2}}']);
createCard(eqnParent, "Particle Wave Duality/de Broglie Wavelength",
    ['\\lambda=\\frac{h}{mv}', '\\text{If the de Broglie wavelength }\\geq \\text{ than size of object, need quantum mechanics to describe it}']);
createCard(eqnParent, "Particle in a box",
    ['\\psi(x)=Asin(\\frac{nx}{L})',
        'E=\\frac{n^{2}h^{2}}{8mL^{2}}',
        'L=\\sqrt{\\frac{n^{2}h^{2}}{8mE}}',
        '\\Delta E = E_{2} - E_{1} =(n_{f}^2-n_{i}^2)(\\frac{h^2}{8mL^2})']);
createCard(eqnParent, 'Bonding Energy',
    ['\\text{Coulumb\'s Law: }V=\\frac{Q_{1}Q_{2}}{4\\pi \\epsilon_{0}r}=2.31*10^{-19}\\text{J nm} (\\frac{Q_{1}Q_{2}}{r})',
        '\\text{1 debye (D)}=3.336*10^{-30} C m']);
createCard(eqnParent, 'Bonding Polarity & Dipole Moments',
    ['\\text{Dipole moment}=\\mu=QR \\text{ (in Cm or D)}',
        '\\text{1 debye (D)}=3.336*10^{-30} C m']);
createCard(eqnParent, 'Electronegativity',
    ['\\text{Expected bond energy}=\\sqrt{(\\text{H-H bond energy})*(\\text{X-X bond energy})}',
        '\\text{Difference}=\\Delta=(H-X)_{actual}-(H-H)_{expected}',
        '\\text{EN(X)}-\\text{EN(H)}=0.102\\sqrt{\\Delta}']);
createCard(eqnParent, 'Molar Mass',
    ['\\text{mass}=\\text{mols} * \\text{molar mass}',
        '\\text{Mass fraction}=\\frac{\\text{mass/mol of element}}{\\text{mass/mol of molecule}}']);
createCard(eqnParent, 'Molarity',
    ['\\text{Solute: thing being dissolved}', '\\text{Solvent: dissolving medium}', 'M=\\text{molarity}=\\frac{\\text{moles of solute}}{\\text{liters of solution}}',
        'M_{1}V_{1}=M_{2}V_{2}']);

evaluate('c=3e8 m/s', true, false);
evaluate('h=(6.626e-34 m^2 kg/s)', true, false);
evaluate('Ry=2.178e-18 J', true, false)
evaluate('me=electronMass', true, false);
evaluate('amH=1.00794 g/mol', true, false);
evaluate('amC=12.0107 g/mol', true, false);
evaluate('amO=15.9994 g/mol', true, false);
evaluate('amN=14.0067 g/mol', true, false);
evaluate('amCl=35.4527 g/mol', true, false);
math.createUnit('cal', '4.184 J');
math.createUnit('kcal', '1000 cal');
math.createUnit('D', '3.336e-30 C*m');
refresh_vars();
updateHistory();