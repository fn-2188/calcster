import { formatResult, evaluateFunction } from "./Math";
import { evaluate, format } from "mathjs";
let vars = {
  c: { value: evaluate("3e8 m/s"), mutable: false },
  h: { value: evaluate("(6.626e-34 m^2 kg/s)"), mutable: false },
  Ry: { value: evaluate("2.178e-18 J"), mutable: false },
  me: { value: evaluate("electronMass"), mutable: false },
};
test("evaluates stored calculator equations", () => {
  let res = evaluateFunction("4*h*Ry*me to ((g^3 m^4) / s^3)", true, vars);
  expect(formatResult(res.result)).toBe("5.258456600503e-72 (g^3 m^4) / s^3");
});
test("mutability", () => {
  let res = evaluateFunction("testVariable=405nm", false, vars);
  expect(formatResult(res.result)).toBe("405 nm");
  expect(res.newVars.testVariable.mutable).toBe(false);
});
test("stores calculator equation", () => {
  let res = evaluateFunction("testVariable=405nm", true, vars);
  expect(formatResult(res.result)).toBe("405 nm");
  expect(res.newVars).toHaveProperty("testVariable");
  let newVars = { ...vars, ...res.newVars };
  let res2 = evaluateFunction("testVariable", true, newVars);
  expect(formatResult(res2.result)).toBe("405 nm");
});
