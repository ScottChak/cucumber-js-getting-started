import { ICalculator } from "./icalculator";

export class Calculator implements ICalculator {
  Add(a: number, b: number): number {
    return a + b;
  }
}