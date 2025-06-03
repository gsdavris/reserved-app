/*
  Warnings:

  - A unique constraint covering the columns `[featuredImageId]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "featuredImageId" INTEGER;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "caption" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "experienceId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Experience_featuredImageId_key" ON "Experience"("featuredImageId");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_featuredImageId_fkey" FOREIGN KEY ("featuredImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
