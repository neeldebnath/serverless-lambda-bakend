import { middyfy } from "@libs/lambda";
import ProductService from "../../../services/products";
import { Product } from "../../../types";

// import schema from "./schema";

export const getProductsList = async () => {
  const productsService = new ProductService();
  const products: Product[] = productsService.getProducts();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,PATCH",
    },
    body: JSON.stringify(products),
  };
};

export const main = middyfy(getProductsList);
