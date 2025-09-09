/*
  Warnings:

  - You are about to drop the `EmployerQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EmployerQuestion" DROP CONSTRAINT "EmployerQuestion_jobId_fkey";

-- DropTable
DROP TABLE "public"."EmployerQuestion";

-- CreateTable
CREATE TABLE "public"."CompanyQuestion" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" "public"."QuestionType" NOT NULL,
    "options" TEXT[],
    "companyId" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanyQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuestionsOnJobs" (
    "jobId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER,

    CONSTRAINT "QuestionsOnJobs_pkey" PRIMARY KEY ("jobId","questionId")
);

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."CompanyQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CompanyQuestion" ADD CONSTRAINT "CompanyQuestion_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuestionsOnJobs" ADD CONSTRAINT "QuestionsOnJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuestionsOnJobs" ADD CONSTRAINT "QuestionsOnJobs_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."CompanyQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
