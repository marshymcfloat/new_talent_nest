/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `Resume` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Resume_id_userId_key";

-- DropIndex
DROP INDEX "public"."Resume_title_key";

-- AlterTable
ALTER TABLE "public"."CareerHistory" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Education" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Resume_userId_title_key" ON "public"."Resume"("userId", "title");
