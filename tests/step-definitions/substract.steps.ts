import { ICalculator, Calculator } from "../../lib/calculator";

import { binding, given, then, when } from "cucumber-tsflow";
import { expect } from "chai";

@binding()
export class SubstractSteps {
  private _sut: ICalculator;
  private _source: number;
  private _result: number;

  public constructor() {
    this._sut = new Calculator();
  }

  @given(/The source is set to (-?\d*)/)
  public GivenTheSourceIsSetTo(a: string) {
    this._source = Number(a);
  }

  @when(/The user substracts (-?\d*)/)
  public WhenTheUserSubstracts(b: string) {
    this._result = this._sut.Substract(this._source, Number(b));
  }

  @then(/The result should be (-?\d*)/)
  public ThenTheResultShoudBe(expectedResult: string) {
    expect(this._result).to.equal(Number(expectedResult));
  }
}
