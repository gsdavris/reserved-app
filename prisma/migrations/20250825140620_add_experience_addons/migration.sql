-- CreateEnum
CREATE TYPE "public"."AddonPricingMode" AS ENUM ('per_booking', 'per_person', 'per_unit_time');

-- CreateEnum
CREATE TYPE "public"."AddonInventoryMode" AS ENUM ('unlimited', 'limited');

-- CreateTable
CREATE TABLE "public"."ExperienceAddons" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "options" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExperienceAddons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceAddons_experienceId_key" ON "public"."ExperienceAddons"("experienceId");

-- AddForeignKey
ALTER TABLE "public"."ExperienceAddons" ADD CONSTRAINT "ExperienceAddons_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
