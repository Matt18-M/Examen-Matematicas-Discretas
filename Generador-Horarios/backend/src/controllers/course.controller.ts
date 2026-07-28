import { type Request, type Response } from "express";
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from "../services/course.service.js";

// Crear materia
export const createCourseController = async ( req: Request, res: Response ): Promise<void> => {
    try {
    const course = await createCourse(req.body);

    res.status(201).json(course);
    } catch (error) {
    console.error(error);

    res.status(500).json({
        message: "Error al registrar la materia",
    });
}
};

// Obtener todas las materias
export const getCoursesController = async ( req: Request, res: Response ): Promise<void> => {
    try {
    const courses = await getCourses();

    res.status(200).json(courses);
    } catch (error) {
    console.error(error);

    res.status(500).json({
        message: "Error al obtener las materias",
    });
}
};

// Obtener materia por ID
export const getCourseByIdController = async ( req: Request, res: Response): Promise<void> => {
    try {
    const id = Number(req.params.id);

    const course = await getCourseById(id);

    if (!course) {
        res.status(404).json({
        message: "Materia no encontrada",
    });
        return;
    }

    res.status(200).json(course);
        } catch (error) {
    console.error(error);

    res.status(500).json({
        message: "Error al buscar la materia",
    });
}
};

// Actualizar materia
export const updateCourseController = async ( req: Request, res: Response ): Promise<void> => {
    try {
    const id = Number(req.params.id);

    const exists = await getCourseById(id);

    if (!exists) {
        res.status(404).json({
        message: "Materia no encontrada",
    });
        return;
    }

    const course = await updateCourse(id, req.body);

    res.status(200).json(course);
    } catch (error) {
    console.error(error);

    res.status(500).json({
        message: "Error al actualizar la materia",
    });
}
};

// Eliminar materia
export const deleteCourseController = async ( req: Request, res: Response): Promise<void> => {
    try {
    const id = Number(req.params.id);

    const exists = await getCourseById(id);

    if (!exists) {
        res.status(404).json({
        message: "Materia no encontrada",
    });
        return;
    }

    await deleteCourse(id);

    res.status(200).json({
        message: "Materia eliminada correctamente",
    });
        } catch (error) {
    console.error(error);

    res.status(500).json({
    message: "Error al eliminar la materia",
    });
}
};