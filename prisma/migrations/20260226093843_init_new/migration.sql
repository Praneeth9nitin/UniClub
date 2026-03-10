/*
  Warnings:

  - The `verified` column on the `College` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `email` to the `Faculty` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'UNDER_REVIEW', 'VERIFIED', 'REJECTED');

-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "deletesAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "College" ADD COLUMN     "accrediation" TEXT,
ADD COLUMN     "address" TEXT,
ADD COLUMN     "affiliatedUniversity" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "establisedYear" INTEGER,
ADD COLUMN     "latitude" TEXT,
ADD COLUMN     "longitude" TEXT,
ADD COLUMN     "officialEmail" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "regitrationNumber" TEXT,
ADD COLUMN     "verificationNote" TEXT,
ADD COLUMN     "verififedTime" TIMESTAMP(3),
DROP COLUMN "verified",
ADD COLUMN     "verified" "VerificationStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Faculty" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "StudentInClub" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'PENDING';
