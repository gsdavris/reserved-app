/*
  Warnings:

  - Added the required column `businessId` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('customer', 'partner', 'admin');

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "businessId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'customer';

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
