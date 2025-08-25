-- AlterTable
ALTER TABLE "public"."Job" ADD COLUMN     "benefits" TEXT,
ADD COLUMN     "employerQuestions" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "qualifications" TEXT NOT NULL DEFAULT 'no qualifications provided',
ADD COLUMN     "responsibilities" TEXT NOT NULL DEFAULT 'no responsibilities provided',
ADD COLUMN     "summary" TEXT NOT NULL DEFAULT 'no summary provided',
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];
