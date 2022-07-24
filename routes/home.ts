import express from 'express';
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send("<div>BookletZERO API</div><div><a href='/doc'>Api Doc</a></div>")
})


module.exports = router
