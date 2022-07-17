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
const endpointsFiles = ['./routes/category.ts', './routes/questions.ts'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */


swaggerAutogen(outputFile, endpointsFiles, doc);