import { Product } from "../../types";
import { products } from "./mockData";

export default class ProductService {
  private products: Product[];

  constructor() {
    this.products = products;
  }

  public getProductById(id: string | number): Product | undefined {
    return this.products.find((item) => item.id === id);
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
