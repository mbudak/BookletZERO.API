const router = express.Router();
import { Router } from 'express';

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res. send("<h1>BookletZERO API</h1> <div> <a href='/doc'>API Documents</a> </div>");
})

export default indexRouter;

module.exports = router;