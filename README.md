# Serverless-Lambda-Backend

## Functions

Two separate functions have been hosted so far,

1. **GET** - [/products](https://ckdptybeq7.execute-api.ap-south-1.amazonaws.com/dev/products): Get the list of all products
2. **GET** - [/products/{productId}](https://ckdptybeq7.execute-api.ap-south-1.amazonaws.com/dev/products/2): Get the product object with it's id passed in path (e.g /products/2)

## Swagger Documentation

Swagger is not hosted yet, but to view, please copy the content of ['swagger.yml'](https://raw.githubusercontent.com/neeldebnath/serverless-lambda-bakend/test-3/swagger.yml) and paste it to [Swagger Editor](https://editor.swagger.io/).

## Deployment

Serverless has been set up to this project and to deploy the changes to lambda function, please run the below script into bash
`npm run deploy`
