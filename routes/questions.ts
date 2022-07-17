import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

module.exports = function (app: any) {
    app.get("/questions", async (req: any, res) => {
        const questions = await prisma.question.findMany();
        res.json(questions);
    })
}