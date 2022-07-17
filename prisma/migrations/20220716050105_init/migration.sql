-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLECHOICE', 'TRUEFALSE', 'SHORTANSWER', 'NUMERICAL', 'ESSAY');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "predecessorId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL DEFAULT 'MULTIPLECHOICE',

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_predecessorId_key" ON "Category"("predecessorId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_categoryId_key" ON "Question"("categoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_predecessorId_fkey" FOREIGN KEY ("predecessorId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
