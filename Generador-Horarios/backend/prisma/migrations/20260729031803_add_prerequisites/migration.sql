-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "prerequisites" TEXT[] DEFAULT ARRAY[]::TEXT[];
