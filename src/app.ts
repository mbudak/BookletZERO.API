import { PrismaClient } from '@prisma/client'
import express from 'express';

const swaggerAutogen = require('swagger-autogen')();


export const prisma = new PrismaClient()


// Defaults
const app   = express();
const path  = require('path');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

let swaggerOptions = {
  explorer: true
}



app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

//


app.use(express.json());


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Route imports
import home from "../routes/home";

// Routes
app.use("/", home);

import bookletCodeGenerator  from '../utils/bookletCode';

app.get('/code', (req, res) => {
  var test = bookletCodeGenerator('###-###-###');
  res.send(`Code is : ${test}`);
})


app.post("/categories", async (req, res) => {

});

app.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany()

    res.json(categories)
  } catch (error: any) {
    res.status(500).json({
      message: `error: ${error.message}` ,
    })
  }
})

app.get("/questions", async (req, res) => {
  try {
    const questions = await prisma.question.findMany()

    res.json(questions)
  } catch (error: any) {
    res.status(500).json({
      message: `error: ${error.message}` ,
    })
  }
})



const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
`),
)