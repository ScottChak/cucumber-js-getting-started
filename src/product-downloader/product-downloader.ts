import { Product } from "./product";
import { IProductDownloader } from "./i-product-downloader";

import * as https from "https";

export class ProductDownloader implements IProductDownloader {
  DownloadProductsAsync(): Promise<Product[]> {
    var response: Promise<Product[]> = new Promise<Product[]>((resolve, reject) => {
      let requestOptions: https.RequestOptions = {
        host: "export.data.bytehappens.com",
        path: "/products",
        method: "get",
        headers: { "Content-Type": "application/json" }
      };

      https.get(requestOptions, res => {
        res.setEncoding("utf8");

        let rawData = "";

        res.on("data", chunk => {
          rawData += chunk;
        });

        res.on("end", () => {
          try {
            resolve(<Product[]>JSON.parse(rawData));
          } catch (ex) {
            reject(ex.message);
          }
        });
      });
    });

    return response;
  }
}
