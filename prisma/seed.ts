import { PrismaClient, Prisma } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();
const categoryData: Prisma.CategoryCreateInput[] = [
    {
        name: "English",
        path: "English",
    },
    {
        name: "Aviation",
        path: "Aviation",        
    },
    {
        name: "ATPL",
        path: "Aviation || ATPL",
        parent: { connect: { id: 2 }}
        // predecessor: { connect: { id: 2 }}
    },
    {
        name: "PPL",
        path: "Aviation || PPL",
        parent: { connect: { id: 2 }}
        // predecessor: { connect: { id: 2 }}
    },    
    {
        name: "ENG LEVEL 5",
        path: "English || ENG LEVEL 5",
        parent: { connect: { id: 2 }}
        // predecessor: { connect: { id: 2 }}
    },
    {
        name: "ENG LEVEL 5.1",
        path: "English || ENG LEVEL 5 || DEEP ",
        parent: { connect: { id: 5 }}
        // predecessor: { connect: { id: 2 }}
    },





];

const questionData: Prisma.QuestionCreateInput[] = [
    {
        body: "First Question Here",
        details: "Details here",
        category: { connect: { id: 1 } },
        questionType: "MULTIPLECHOICE",
    },
    {
        body: "Second Question Here",
        details: "Second Details here",
        category: { connect: { id: 2 } },
        questionType: "MULTIPLECHOICE",
    }
]

async function main() {
    console.log('Seeding started');
    for (const c of categoryData) {
        const category = await prisma.category.create({
            data: c,
        });
        console.log(`Category created with id: ${category.id}`);
    }
    
    for (const q of questionData) {
        const question = await prisma.question.create({
            data: q,
        })
        console.log(`Question created with id: ${question.id}`);
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