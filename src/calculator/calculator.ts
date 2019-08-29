import { ICalculator } from "./i-calculator";

export class Calculator implements ICalculator {
  Add(a: number, b: number): number {
    return a + b;
  }

  Substract(a: number, b: number): number {
    return this.Add(a, -b);
  }
}
