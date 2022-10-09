import { middyfy } from "@libs/lambda";
import ProductService from "../../../services/products";
import { Product } from "../../../types";

// import schema from "./schema";

const getProductById = async (event) => {
  const id = event.pathParameters.id;
  const productsService = new ProductService();
  const product: Product | undefined = productsService.getProductById(+id);

  if (product) {
    return {
      statusCode: 200,
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
