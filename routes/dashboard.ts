import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const router = express.Router()
const prisma = new PrismaClient()


// define the home page route
router.get('/', (req, res) => {
    // res.send("<div>BookletZERO API</div><div><a href='/doc'>Api Doc</a></div>")
    res.render('pages/dashboard');
})

// define the home page route
// define the home page route
router.get('/category', async (req, res) => {

    const categories = await prisma.category.findMany({ where: { parentId : { equals: null } }});
    res.render('pages/dashboard/category', { breadcrumbs : [ { cid: null, name: "Categories" }], categories });
})


router.get('/category/:id', async (req, res) => {
    const cat = await prisma.category.findFirst({ where: { cid : { equals: req.params.id  } }});
    // console.log('ahanda', cat?.id);


    const withParent1 = await prisma.category.findUnique({where:{id: cat?.id}, include: {parent: true}})
    const withParent2 = await prisma.category.findUnique({where:{id: cat?.id}, include: {parent: {include: {parent: true}}}})
    const withParent3 = await prisma.category.findUnique({where:{id: cat?.id}, include: {parent: {include: {parent: { include: {parent: true}}}}}})


    let breadcrumbs = [];
    breadcrumbs.push({ cid: null, name: "Categories"});


    if (withParent3?.parent?.parent?.cid != null) {
        breadcrumbs.push({ cid: withParent3?.parent?.parent?.cid, name: withParent3?.parent?.parent?.name });
    }
    if (withParent2?.parent?.cid != null) {
        breadcrumbs.push({ cid: withParent2?.parent?.cid, name: withParent2?.parent?.name });
    }
    if (withParent1?.cid != null) {
        breadcrumbs.push({ cid: withParent1?.cid, name: withParent1?.name });
    }

    const categories = await prisma.category.findMany({ where: { parentId : { equals: cat?.id } }});
    res.render('pages/dashboard/category', { breadcrumbs, categories });
})




router.get('/about', (req, res) => {
    res.render('pages/about')
})


module.exports = router
