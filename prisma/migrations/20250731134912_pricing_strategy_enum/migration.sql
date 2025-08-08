/*
  Warnings:

  - You are about to drop the column `price` on the `Experience` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PricingStrategy" AS ENUM ('flat', 'grouped', 'tiered', 'dynamic', 'split', 'ticket');

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "price";

-- CreateTable
CREATE TABLE "ExperiencePricing" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "perPerson" BOOLEAN NOT NULL DEFAULT true,
    "groupPricing" JSONB,
    "tiers" JSONB,
    "dynamicRules" JSONB,
    "depositPercent" DOUBLE PRECISION,
    "paymentCount" INTEGER,
    "paymentInterval" TEXT,
    "allowGroupPay" BOOLEAN NOT NULL DEFAULT false,
    "addons" JSONB,
    "discountPrice" DOUBLE PRECISION,
    "discountUntil" TIMESTAMP(3),
    "pricingStrategy" "PricingStrategy" NOT NULL DEFAULT 'flat',

    CONSTRAINT "ExperiencePricing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExperiencePricing_experienceId_key" ON "ExperiencePricing"("experienceId");

-- AddForeignKey
ALTER TABLE "ExperiencePricing" ADD CONSTRAINT "ExperiencePricing_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
