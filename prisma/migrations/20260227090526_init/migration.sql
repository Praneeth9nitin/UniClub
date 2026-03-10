/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Faculty` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Faculty` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_collegeId_fkey";

-- AlterTable
ALTER TABLE "Faculty" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "collegeId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_email_key" ON "Faculty"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE SET NULL ON UPDATE CASCADE;
