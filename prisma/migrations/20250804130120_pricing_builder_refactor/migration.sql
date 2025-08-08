/*
  Warnings:

  - You are about to drop the column `addons` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `allowGroupPay` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `basePrice` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `depositPercent` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `discountPrice` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `discountUntil` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `dynamicRules` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `groupPricing` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `paymentCount` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `paymentInterval` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `perPerson` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `pricingStrategy` on the `ExperiencePricing` table. All the data in the column will be lost.
  - You are about to drop the column `tiers` on the `ExperiencePricing` table. All the data in the column will be lost.
  - Added the required column `options` to the `ExperiencePricing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ExperiencePricing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExperiencePricing"
DROP COLUMN "addons",
DROP COLUMN "allowGroupPay",
DROP COLUMN "basePrice",
DROP COLUMN "depositPercent",
DROP COLUMN "discountPrice",
DROP COLUMN "discountUntil",
DROP COLUMN "dynamicRules",
DROP COLUMN "groupPricing",
DROP COLUMN "paymentCount",
DROP COLUMN "paymentInterval",
DROP COLUMN "perPerson",
DROP COLUMN "pricingStrategy",
DROP COLUMN "tiers",
ADD COLUMN "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "options" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropEnum
DROP TYPE "PricingStrategy";