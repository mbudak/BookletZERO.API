-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLECHOICE', 'TRUEFALSE', 'SHORTANSWER', 'NUMERICAL', 'ESSAY');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "predecessorId" INTEGER,
    "Accepted" INTEGER NOT NULL DEFAULT 0,
    "Waiting" INTEGER NOT NULL DEFAULT 0,
    "Obsolote" INTEGER NOT NULL DEFAULT 0,
    "SuccessRate" DECIMAL(65,30) NOT NULL DEFAULT 0.0,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "_id" UUID NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL DEFAULT 'MULTIPLECHOICE',
    "versionNumber" INTEGER NOT NULL DEFAULT 0,
    "isObsolote" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdUserId" TEXT NOT NULL DEFAULT 'system',
    "updatedAt" TIMESTAMP(3),
    "updatedUserId" TEXT,
    "hintLink" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "QuestionExplanations" (
    "_id" UUID NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "QuestionExplanations_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,
    "duration" INTEGER NOT NULL,
    "passScore" INTEGER NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamQuestion" (
    "id" TEXT NOT NULL,

    CONSTRAINT "ExamQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamTemplate" (
    "id" TEXT NOT NULL,
    "questionCategory" TEXT NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ExamTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamRule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "ExamRule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_predecessorId_key" ON "Category"("predecessorId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_categoryId_key" ON "Question"("categoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_predecessorId_fkey" FOREIGN KEY ("predecessorId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
