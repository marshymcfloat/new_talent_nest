/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Education` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Education_id_userId_key" ON "public"."Education"("id", "userId");
