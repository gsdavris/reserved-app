UPDATE "public"."Experience"
SET "isPublished" = COALESCE("isPublished", "available");