import { middyfy } from "@libs/lambda";
import ProductService from "../../../services/products";
import { Product } from "../../../types";

// import schema from "./schema";

export const getProductById = async (event) => {
  const id = event.pathParameters.id;
  const productsService = new ProductService();
  const product: Product | undefined = productsService.getProductById(+id);

  if (product) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,PATCH",
      },
      body: JSON.stringify(product),
    };
  } else {
    return {
      statusCode: 404,
      message: "The product is not found",
    };
  }
};

export const main = middyfy(getProductById);
