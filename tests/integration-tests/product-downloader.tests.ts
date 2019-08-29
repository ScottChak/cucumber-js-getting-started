import "mocha";
import { expect } from "chai";

import { Product, IProductDownloader, ProductDownloader } from "../../lib/product-downloader";

describe("Download Products", () => {
  it("Should download products", async () => {
    let sut: IProductDownloader = new ProductDownloader();

    var products: Product[] = await sut.DownloadProductsAsync();
    expect(products).to.not.be.undefined;
    expect(products).to.be.an("array").that.is.not.empty;
  });
});
