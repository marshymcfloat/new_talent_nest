-- CreateEnum
CREATE TYPE "public"."JobStatus" AS ENUM ('ACTIVE', 'PAUSED', 'CLOSED');

-- CreateEnum
CREATE TYPE "public"."ApplicationStatus" AS ENUM ('NEW', 'IN_REVIEW', 'INTERVIEWING', 'OFFERED', 'HIRED', 'REJECTED');

-- AlterTable
ALTER TABLE "public"."Job" ADD COLUMN     "status" "public"."JobStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "public"."JobApplication" ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "status" "public"."ApplicationStatus" NOT NULL DEFAULT 'NEW';
