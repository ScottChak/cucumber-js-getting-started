import { ICalculator, Calculator } from "../../../../lib/calculator";

import { binding, given, then, when } from "cucumber-tsflow";
import { expect } from "chai";

@binding()
export class AddSteps {
  private _sut: ICalculator;
  private _result: number;

  public constructor() {
    this._sut = new Calculator();
  }

  @when(/The user adds (-?\d*) and (-?\d*)/)
  public WhenTheUserAddsAAndB(a: string, b: string): void {
    this._result = this._sut.Add(Number(a), Number(b));
  }

  @then(/The result should be (-?\d*)/)
  public ThenTheResultShoudBe(expectedResult: string): void {
    expect(this._result).to.equal(Number(expectedResult));
  }
}
