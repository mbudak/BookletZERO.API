import express from 'express';
import { PrismaClient } from '@prisma/client'


const swaggerAutogen = require('swagger-autogen')();


export const prisma = new PrismaClient()


// Defaults
const app   = express();
const path  = require('path');


// set the view engine to ejs
app.set('view engine', 'ejs');


// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const swaggerOptions = {
  explorer: true
}



app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

//

// Static Files
app.use(express.static(path.join(__dirname,'public')));


// Route imports
const landingRoute = require('./routes/landing');
const categoryRoute = require('./routes/category');
const dashboardRoute = require("./routes/dashboard");


app.use('/', landingRoute);
app.use('/category', categoryRoute);
app.use('/dashboard', dashboardRoute);




const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
`),
)