/*
  Warnings:

  - You are about to drop the column `location` on the `Experience` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "DurationUnit" AS ENUM ('day', 'hour', 'half_day', 'event', 'custom');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('point', 'region');

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "location",
ADD COLUMN     "locationId" INTEGER;

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "LocationType" NOT NULL,
    "coordinates" JSONB,
    "boundingBox" JSONB,
    "placeId" TEXT,
    "country" TEXT,
    "locality" TEXT,
    "adminArea" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
