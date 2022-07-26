import express from 'express';
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    // res.send("<div>BookletZERO API</div><div><a href='/doc'>Api Doc</a></div>")
    res.render('pages/landing');
})

router.get('/about', (req, res) => {
    res.render('pages/about')
})


module.exports = router
