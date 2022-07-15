import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

module.exports = function (app: any) {
    app.get("/categories", async (req: any, res) => {
        const categories = await prisma.category.findMany();
        res.json(categories);
    })
}