import { evaluate } from "mathjs";

export function evaluateFunction(expr, mutable, vars) {
  let varsToAdd = [];
  let modified_expr = expr;
  try {
    let result = undefined;
    // Check for variable assignment
    if (expr.includes("=")) {
      // General syntax checks
      let args = expr.split("=");
      if (args.length > 2) {
        throw new Error("Multiple equal (=) signs!");
      }
      let v = args[0].replace(" ", "");
      if (v in vars && !vars[v].mutable) {
        throw new Error("Cannot change this value, it is a constant.");
      }
      // TODO check for any unit being assigned
      if (v === "m") {
        throw new Error("Err, assigned m");
      }
      // evaluate only right side of equal sign
      modified_expr = args[1];
      // new variables to be added
      varsToAdd.push(v);
    }
    let mappedVariables = {};
    for (let v in vars) {
      mappedVariables[v] = vars[v].value;
    }
    result = evaluate(modified_expr, mappedVariables).toString();
    let newVars = {};
    varsToAdd.forEach((nv) => {
      newVars[nv] = { value: result, mutable: mutable };
    });
    return {
      err: false,
      result: result,
      input: expr,
      evaluatedExpression: modified_expr,
      newVars: newVars,
    };
  } catch (error) {
    return {
      err: true,
      input: expr,
      evaluatedExpression: modified_expr,
      result: error.message,
      newVars: {},
    };
  }
}
