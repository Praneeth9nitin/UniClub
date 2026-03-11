/*
  Warnings:

  - Added the required column `category` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "mode" AS ENUM ('ONLINE', 'OFFLINE', 'HYBRID');

-- CreateEnum
CREATE TYPE "eventStatus" AS ENUM ('UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Club" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "College" ALTER COLUMN "collegeType" DROP NOT NULL;

-- CreateTable
CREATE TABLE "clubAdmin" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "clubId" TEXT NOT NULL,

    CONSTRAINT "clubAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "clubId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "mode" "mode" NOT NULL,
    "registrationLink" TEXT,
    "registrationFee" INTEGER,
    "registrationOpen" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "venue" TEXT,
    "city" TEXT,
    "banner" TEXT,
    "capacity" INTEGER,
    "registrationDeadline" TIMESTAMP(3),
    "status" "eventStatus" NOT NULL DEFAULT 'UPCOMING',
    "isPublic" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clubAdmin_email_key" ON "clubAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clubAdmin_clubId_key" ON "clubAdmin"("clubId");

-- AddForeignKey
ALTER TABLE "clubAdmin" ADD CONSTRAINT "clubAdmin_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "Club"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
