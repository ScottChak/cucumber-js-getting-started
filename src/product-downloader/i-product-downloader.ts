import { Product } from "./product";

export interface IProductDownloader {
  DownloadProductsAsync(): Promise<Product[]>;
}
