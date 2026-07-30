import { Router } from "express";

import { createCourseController, getCoursesController, getCourseByIdController, updateCourseController, deleteCourseController } from "../controllers/course.controller.js";
import { validateCourse, validateId } from "../middlewares/validation.middleware.js";

const router = Router();

// Obtener todos los cursos
router.get("/", getCoursesController);

// Obtener un curso por ID
router.get("/:id", validateId, getCourseByIdController);

// Crear un curso
router.post("/", validateCourse, createCourseController);

// Actualizar un curso
router.put("/:id", validateId, validateCourse, updateCourseController);

// Eliminar un curso
router.delete("/:id", validateId, deleteCourseController);


export default router;