/*
  Warnings:

  - You are about to drop the column `employerQuestions` on the `Job` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."QuestionType" AS ENUM ('TEXT', 'YES_NO', 'MULTIPLE_CHOICE', 'NUMBER');

-- AlterTable
ALTER TABLE "public"."Job" DROP COLUMN "employerQuestions";

-- CreateTable
CREATE TABLE "public"."EmployerQuestion" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" "public"."QuestionType" NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "options" TEXT[],
    "jobId" TEXT NOT NULL,

    CONSTRAINT "EmployerQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Answer" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "jobApplicationId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_jobApplicationId_questionId_key" ON "public"."Answer"("jobApplicationId", "questionId");

-- AddForeignKey
ALTER TABLE "public"."EmployerQuestion" ADD CONSTRAINT "EmployerQuestion_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_jobApplicationId_fkey" FOREIGN KEY ("jobApplicationId") REFERENCES "public"."JobApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."EmployerQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
