-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "predecessorId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_predecessorId_key" ON "Category"("predecessorId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_predecessorId_fkey" FOREIGN KEY ("predecessorId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
