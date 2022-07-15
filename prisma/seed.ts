import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const categoryData: Prisma.CategoryCreateInput[] = [
    {
        name: "English",
        path: "English",
    },
    {
        name: "ATPL",
        path: "ATPL"
    }
];

async function main() {
    console.log('Seeding started');
    for (const c of categoryData) {
        const category = await prisma.category.create({
            data: c,
        });
        console.log(`Category created with id: ${category.id}`)
    }
    console.log('Seeding finished');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })