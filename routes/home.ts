import * as express from 'express';
const router = express.Router();

router.get("/", (req, res) => {

    res.send("<div>BookletZERO API</div><div><a href='/doc'>Api Doc</a></div>")
})

export default router;