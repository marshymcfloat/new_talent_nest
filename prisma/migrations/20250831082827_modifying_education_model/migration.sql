/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `dateEnded` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `dateStarted` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Education` table. All the data in the column will be lost.
  - Added the required column `isComplete` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."CareerHistory" ALTER COLUMN "dateEnded" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Education" DROP COLUMN "createdAt",
DROP COLUMN "dateEnded",
DROP COLUMN "dateStarted",
DROP COLUMN "updatedAt",
ADD COLUMN     "expectedFinishMonth" INTEGER,
ADD COLUMN     "expectedFinishYear" INTEGER,
ADD COLUMN     "finishedYear" INTEGER,
ADD COLUMN     "isComplete" BOOLEAN NOT NULL;
