-- CreateEnum
CREATE TYPE "public"."AvailabilityType" AS ENUM ('COUNT', 'UNIT', 'APPOINTMENT');

-- AlterTable
ALTER TABLE "public"."Experience" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "public"."Provider" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "meta" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExperienceProvider" (
    "experienceId" INTEGER NOT NULL,
    "providerId" INTEGER NOT NULL,
    "role" TEXT,
    "meta" JSONB,

    CONSTRAINT "ExperienceProvider_pkey" PRIMARY KEY ("experienceId","providerId")
);

-- CreateTable
CREATE TABLE "public"."ExperienceAvailability" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "type" "public"."AvailabilityType" NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'Europe/Athens',
    "rules" JSONB NOT NULL,
    "openHours" JSONB,
    "exceptions" JSONB,
    "slot" JSONB,
    "capacity" JSONB,
    "bookingWindow" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExperienceAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExperienceUnit" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "zone" TEXT,
    "position" JSONB,
    "capacity" INTEGER NOT NULL DEFAULT 1,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExperienceUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryHold" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "unitId" INTEGER,
    "providerId" INTEGER,
    "optionId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryHold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BookingItem" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "unitId" INTEGER,
    "providerId" INTEGER,
    "optionId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "currency" TEXT,
    "priceCents" INTEGER,
    "meta" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Provider_businessId_idx" ON "public"."Provider"("businessId");

-- CreateIndex
CREATE INDEX "ExperienceProvider_providerId_idx" ON "public"."ExperienceProvider"("providerId");

-- CreateIndex
CREATE UNIQUE INDEX "ExperienceAvailability_experienceId_key" ON "public"."ExperienceAvailability"("experienceId");

-- CreateIndex
CREATE INDEX "ExperienceUnit_experienceId_active_idx" ON "public"."ExperienceUnit"("experienceId", "active");

-- CreateIndex
CREATE INDEX "ExperienceUnit_experienceId_zone_idx" ON "public"."ExperienceUnit"("experienceId", "zone");

-- CreateIndex
CREATE INDEX "InventoryHold_experienceId_from_to_idx" ON "public"."InventoryHold"("experienceId", "from", "to");

-- CreateIndex
CREATE INDEX "InventoryHold_unitId_from_to_idx" ON "public"."InventoryHold"("unitId", "from", "to");

-- CreateIndex
CREATE INDEX "InventoryHold_providerId_from_to_idx" ON "public"."InventoryHold"("providerId", "from", "to");

-- CreateIndex
CREATE INDEX "BookingItem_experienceId_from_to_idx" ON "public"."BookingItem"("experienceId", "from", "to");

-- CreateIndex
CREATE INDEX "BookingItem_unitId_from_to_idx" ON "public"."BookingItem"("unitId", "from", "to");

-- CreateIndex
CREATE INDEX "BookingItem_providerId_from_to_idx" ON "public"."BookingItem"("providerId", "from", "to");

-- CreateIndex
CREATE INDEX "Booking_experienceId_date_idx" ON "public"."Booking"("experienceId", "date");

-- AddForeignKey
ALTER TABLE "public"."Provider" ADD CONSTRAINT "Provider_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExperienceProvider" ADD CONSTRAINT "ExperienceProvider_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExperienceProvider" ADD CONSTRAINT "ExperienceProvider_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExperienceAvailability" ADD CONSTRAINT "ExperienceAvailability_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExperienceUnit" ADD CONSTRAINT "ExperienceUnit_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryHold" ADD CONSTRAINT "InventoryHold_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryHold" ADD CONSTRAINT "InventoryHold_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "public"."ExperienceUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryHold" ADD CONSTRAINT "InventoryHold_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingItem" ADD CONSTRAINT "BookingItem_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "public"."Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingItem" ADD CONSTRAINT "BookingItem_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "public"."Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingItem" ADD CONSTRAINT "BookingItem_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "public"."ExperienceUnit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BookingItem" ADD CONSTRAINT "BookingItem_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;
