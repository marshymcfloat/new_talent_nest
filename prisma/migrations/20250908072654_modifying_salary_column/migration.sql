/*
  Warnings:

  - You are about to drop the column `salary` on the `Job` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."SalaryPeriod" AS ENUM ('HOURLY', 'MONTHLY', 'ANNUAL');

-- AlterTable
ALTER TABLE "public"."Job" DROP COLUMN "salary",
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'PHP',
ADD COLUMN     "maxSalary" INTEGER,
ADD COLUMN     "minSalary" INTEGER,
ADD COLUMN     "payPeriod" "public"."SalaryPeriod";
