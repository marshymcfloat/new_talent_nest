/*
  Warnings:

  - You are about to drop the column `JobClass` on the `Job` table. All the data in the column will be lost.
  - Added the required column `jobClass` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Job" DROP COLUMN "JobClass",
ADD COLUMN     "jobClass" "public"."JobClass" NOT NULL;
