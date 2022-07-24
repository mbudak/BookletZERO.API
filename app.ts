import express from 'express';
import { PrismaClient } from '@prisma/client'


const swaggerAutogen = require('swagger-autogen')();


export const prisma = new PrismaClient()


// Defaults
const app   = express();
const path  = require('path');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

let swaggerOptions = {
  explorer: true
}



app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

//

// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Route imports
const homeRoute = require('./routes/home');
const category = require('./routes/category');


app.use('/', homeRoute);
app.use('/category', category);




const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
`),
)