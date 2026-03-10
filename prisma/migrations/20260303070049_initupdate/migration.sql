/*
  Warnings:

  - You are about to drop the column `deletesAt` on the `Club` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Club" DROP COLUMN "deletesAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);
