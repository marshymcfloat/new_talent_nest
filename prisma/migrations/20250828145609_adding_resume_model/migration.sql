/*
  Warnings:

  - You are about to drop the column `resumes` on the `User` table. All the data in the column will be lost.
  - Added the required column `resumeId` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."JobApplication" ADD COLUMN     "resumeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "resumes";

-- CreateTable
CREATE TABLE "public"."Resume" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resume_Title_key" ON "public"."Resume"("Title");

-- AddForeignKey
ALTER TABLE "public"."JobApplication" ADD CONSTRAINT "JobApplication_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "public"."Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
