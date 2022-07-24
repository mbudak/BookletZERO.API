const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'BookletZERO API',
    description: 'BookletZERO API is generates pdf booklets from a large selection of question db',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = [
  './app.ts'
];


swaggerAutogen(outputFile, endpointsFiles, doc);