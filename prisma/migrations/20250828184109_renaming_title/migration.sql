/*
  Warnings:

  - You are about to drop the column `Title` on the `Resume` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Resume` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Resume_Title_key";

-- AlterTable
ALTER TABLE "public"."Resume" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Resume_title_key" ON "public"."Resume"("title");
