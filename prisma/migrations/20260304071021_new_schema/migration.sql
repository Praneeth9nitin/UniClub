-- DropForeignKey
ALTER TABLE "Club" DROP CONSTRAINT "Club_cordinatorId_fkey";

-- AlterTable
ALTER TABLE "Club" ALTER COLUMN "cordinatorId" DROP NOT NULL,
ALTER COLUMN "onHold" SET DEFAULT true;

-- AddForeignKey
ALTER TABLE "Club" ADD CONSTRAINT "Club_cordinatorId_fkey" FOREIGN KEY ("cordinatorId") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;
