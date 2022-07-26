import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const router = express.Router()
const prisma = new PrismaClient()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/',  (req, res) => {
    try{
        const categories =  prisma.category.findMany();
        res.json(categories);
    } catch(e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.json(e.code);
        }
    }
    
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About Category Route')
})

router.get('/hello', (req, res) => {
  res.send('world');
})

module.exports = router;
