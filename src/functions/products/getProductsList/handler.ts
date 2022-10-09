import { middyfy } from "@libs/lambda";
import ProductService from "../../../services/products";
import { Product } from "../../../types";

// import schema from "./schema";

const getProductsList = async () => {
  const productsService = new ProductService();
  const products: Product[] = productsService.getProducts();

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};

export const main = middyfy(getProductsList);