-- CreateTable
CREATE TABLE "schedule_config" (
    "id" SERIAL NOT NULL,
    "number_of_courses" INTEGER NOT NULL,
    "maximum_credits" INTEGER NOT NULL,
    "maximum_difficult_courses" INTEGER NOT NULL,
    "required_courses" TEXT[],
    "required_modality" TEXT NOT NULL,
    "avoid_time_conflicts" BOOLEAN NOT NULL DEFAULT true,
    "validate_prerequisites" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "schedule_config_pkey" PRIMARY KEY ("id")
);
