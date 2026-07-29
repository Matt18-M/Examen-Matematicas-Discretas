/*
  Warnings:

  - You are about to drop the `prerequisites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "prerequisites" DROP CONSTRAINT "prerequisites_course_id_fkey";

-- DropForeignKey
ALTER TABLE "prerequisites" DROP CONSTRAINT "prerequisites_prerequisite_course_id_fkey";

-- DropTable
DROP TABLE "prerequisites";
