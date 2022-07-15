import { PrismaClient } from '@prisma/client'
import express from 'express'
const swaggerAutogen = require('swagger-autogen')();


export const prisma = new PrismaClient()


// Defaults
const app   = express();
const path  = require('path');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

var swaggerOptions = {
  explorer: true
}


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));


//  


app.use(express.json());


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Routes
import home from "../routes/home";
// import categories from "../routes/category";

app.use("/", home);
// app.use("/categories", categories);

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




const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
`),
)