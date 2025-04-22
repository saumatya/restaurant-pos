// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Ordering API",
      version: "1.0.0",
      description: "API documentation for menu and order management system",
    },
  },
  apis: ["./routes/*.js"], // Swagger will read JSDoc comments from these files
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
