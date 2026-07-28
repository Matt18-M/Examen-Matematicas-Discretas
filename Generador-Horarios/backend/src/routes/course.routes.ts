import { Router } from "express";

import { createCourseController, getCoursesController, getCourseByIdController, updateCourseController, deleteCourseController } from "../controllers/course.controller.js";

const router = Router();

router.post("/", createCourseController);

router.get("/", getCoursesController);

router.get("/:id", getCourseByIdController);

router.put("/:id", updateCourseController);

router.delete("/:id", deleteCourseController);

export default router;