-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prerequisites" (
    "course_id" INTEGER NOT NULL,
    "prerequisite_course_id" INTEGER NOT NULL,

    CONSTRAINT "prerequisites_pkey" PRIMARY KEY ("course_id","prerequisite_course_id")
);

-- AddForeignKey
ALTER TABLE "prerequisites" ADD CONSTRAINT "prerequisites_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prerequisites" ADD CONSTRAINT "prerequisites_prerequisite_course_id_fkey" FOREIGN KEY ("prerequisite_course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
