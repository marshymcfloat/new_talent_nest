-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."JobClass" ADD VALUE 'ADMINISTRATION';
ALTER TYPE "public"."JobClass" ADD VALUE 'EDUCATION';
ALTER TYPE "public"."JobClass" ADD VALUE 'ENGINEERING';
ALTER TYPE "public"."JobClass" ADD VALUE 'FINANCE';
ALTER TYPE "public"."JobClass" ADD VALUE 'HEALTHCARE';
ALTER TYPE "public"."JobClass" ADD VALUE 'HOSPITALITY';
ALTER TYPE "public"."JobClass" ADD VALUE 'HUMAN_RESOURCES';
ALTER TYPE "public"."JobClass" ADD VALUE 'LEGAL';
ALTER TYPE "public"."JobClass" ADD VALUE 'LOGISTICS';
ALTER TYPE "public"."JobClass" ADD VALUE 'MANUFACTURING';
ALTER TYPE "public"."JobClass" ADD VALUE 'MARKETING';
ALTER TYPE "public"."JobClass" ADD VALUE 'MEDIA';
ALTER TYPE "public"."JobClass" ADD VALUE 'OPERATIONS';
ALTER TYPE "public"."JobClass" ADD VALUE 'SCIENCE';
ALTER TYPE "public"."JobClass" ADD VALUE 'TELECOMMUNICATIONS';
ALTER TYPE "public"."JobClass" ADD VALUE 'TRANSPORTATION';
ALTER TYPE "public"."JobClass" ADD VALUE 'OTHER';
