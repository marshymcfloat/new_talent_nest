/*
  Warnings:

  - You are about to drop the column `preferredWorkType` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."UserApproachability" AS ENUM ('OPEN', 'RECRUITERS_ONLY', 'CLOSED');

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "preferredWorkType",
ADD COLUMN     "approachability" "public"."UserApproachability" DEFAULT 'OPEN',
ADD COLUMN     "preferredWorkTypes" "public"."JobType"[] DEFAULT ARRAY[]::"public"."JobType"[];
