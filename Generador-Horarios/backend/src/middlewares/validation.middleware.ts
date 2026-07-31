import { type Request, type Response, type NextFunction } from "express";

export const validateId = (req: Request, res: Response, next: NextFunction): void => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        res.status(400).json({
            success: false,
            message: "El ID debe ser un número entero positivo."
        });
        return;
    }

    next();
};

export const validateCourse = (req: Request, res: Response, next: NextFunction): void => {
    const {
            name,
            parallel,
            day,
            startTime,
            endTime,
            modality,
            difficulty,
            credits,
            prerequisites
        } = req.body;

    if (!name?.trim()) {
        res.status(400).json({
            success: false,
            message: "El nombre del curso es obligatorio."
        });
        return;
    }

        if (!parallel?.trim()) {
        res.status(400).json({
            success: false,
            message: "El paralelo es obligatorio."
        });
        return;
    }

    const validDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    if (!validDays.includes(day)) {
        res.status(400).json({
            success: false,
            message: "El día ingresado no es válido."
        });
        return;
    }

    if (!startTime || !endTime || startTime >= endTime) {
        res.status(400).json({
            success: false,
            message: "El horario ingresado no es válido."
        });
        return;
    }

    const validModalities = ["Presencial", "Virtual", "Híbrida"];

    if (!validModalities.includes(modality)) {
        res.status(400).json({
            success: false,
            message: "La modalidad ingresada no es válida."
        });
        return;
    }

    const validDifficulties = ["Baja", "Media", "Alta"];

    if (!validDifficulties.includes(difficulty)) {
        res.status(400).json({
            success: false,
            message: "La dificultad debe ser Baja, Media o Alta."
        });
        return;
    }

    if (!Number.isInteger(credits) || credits <= 0) {
        res.status(400).json({
            success: false,
            message: "Los créditos deben ser mayores que cero."
        });
        return;
    }

    if (prerequisites && !Array.isArray(prerequisites)) {
        res.status(400).json({
            success: false,
            message: "Los prerrequisitos deben enviarse como un arreglo."
        });
        return;
    }

    next();
};

export const validateConfig = (req: Request, res: Response, next: NextFunction): void => {
    const {
        numberOfCourses,
        maximumCredits,
        maximumDifficultCourses,
        requiredCourses,
        requiredModality,
        avoidTimeConflicts,
        validatePrerequisites
    } = req.body;

    if (!Number.isInteger(numberOfCourses) || numberOfCourses <= 0) {
        res.status(400).json({
            success: false,
            message: "El número de materias debe ser mayor que cero."
        });
        return;
    }

    if (!Number.isInteger(maximumCredits) || maximumCredits <= 0) {
        res.status(400).json({
            success: false,
            message: "El máximo de créditos debe ser mayor que cero."
        });
        return;
    }

    if (!Number.isInteger(maximumDifficultCourses) || maximumDifficultCourses < 0) {
        res.status(400).json({
            success: false,
            message: "El número de materias difíciles no es válido."
        });
        return;
    }

    if (!Array.isArray(requiredCourses)) {
        res.status(400).json({
            success: false,
            message: "Las materias requeridas deben enviarse como un arreglo."
        });
        return;
    }

    const validModalities = ["Presencial", "Virtual", "Híbrida"];

    if (!validModalities.includes(requiredModality)) {
        res.status(400).json({
            success: false,
            message: "La modalidad requerida no es válida."
        });
        return;
    }

    if (typeof avoidTimeConflicts !== "boolean" || typeof validatePrerequisites !== "boolean") {
        res.status(400).json({
            success: false,
            message: "Los campos de configuración deben ser booleanos."
        });
        return;
    }

    next();
};