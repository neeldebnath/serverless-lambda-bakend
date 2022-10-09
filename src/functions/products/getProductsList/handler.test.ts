import { createMockAPIGatewayEvent, createMockContext } from "@homeservenow/serverless-event-mocks";
import { products } from "../../../services/products/mockData";
import { getProductsList } from "./handler";

const context = createMockContext();
const event = createMockAPIGatewayEvent({
  path: "/path",
  httpMethod: "get",
});

jest.mock("../../services", () => ({
  productService: {
    getProducts: () => {
      return products;
    },
  },
}));

jest.mock("../../libs/lambda", () => ({
  middyfy: (value) => value,
}));

describe("getProductById tests", () => {
  test("should return existing product", async () => {
    const result = await getProductsList(
      // @ts-ignore
      event,
      context,
      () => {}
    );
    expect(result).toEqual({ statusCode: 200, body: JSON.stringify(products) });
  });
});
