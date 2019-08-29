import { Product, IProductDownloader, ProductDownloader } from "../../../../lib/product-downloader";

import { binding, given, then, when } from "cucumber-tsflow";
import * as nock from "nock";
import { expect } from "chai";

@binding()
export class DownloadProductsSteps {
  private _sut: IProductDownloader;
  private _givenProducts: any[];
  private _scope: nock.Scope;
  private _result: Product[];

  public constructor() {
    this._sut = new ProductDownloader();
    this._givenProducts = [];
  }

  @given(/A product with SKU "(.+)", title "(.+)", price (\d+(?:\.\d{1,2})?) and stock (\d+)/)
  public GivenAProductWith(sku: string, title: string, price: string, stock: string): void {
    this._givenProducts.push({
      Sku: sku,
      Title: title,
      Price: Number(price),
      Stock: Number(stock)
    });
  }

  @when(/The user downloads the products/)
  public async WhenTheUserDownloadsTheProducts(): Promise<void> {
    this._scope = nock("https://export.data.bytehappens.com");

    this._scope = this._scope
      .get("/products")
      .times(1)
      .matchHeader("content-type", "application/json")
      .reply(200, this._givenProducts);

    this._result = await this._sut.DownloadProductsAsync();
  }

  @then(/The products should be downloaded/)
  public ThenTheProductsShouldBeDownloaded() {
    this._scope.done();
  }

  @then(/The result shoud be an array/)
  public ThenTheResultShoudBeAnArray() {
    expect(this._result).to.be.an("array");
  }

  @then(/Their should be (\d*) product\(s\)/)
  public ThenTheirShouldQtyProduct(qty: string) {
    expect(this._result).to.have.lengthOf(Number(qty));
  }
}
