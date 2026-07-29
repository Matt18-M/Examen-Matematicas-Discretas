import prisma from "../config/prisma.js";

export interface CreateCourseDTO {
    name: string;
    day: string;
    startTime: string;
    endTime: string;
    modality: string;
    difficulty: string;
    credits: number;
    prerequisites: string[];
}

// Crear materia
export const createCourse = async (data: CreateCourseDTO) => {
    return await prisma.course.create({
        data
    });
};

// Obtener todas las materias
export const getCourses = async () => {
    return await prisma.course.findMany({
        orderBy: { id: "asc" }
    });
};

// Obtener una materia por ID
export const getCourseById = async (id: number) => {
    return await prisma.course.findUnique({
        where: { id }
    });
};

// Actualizar una materia
export const updateCourse = async (id: number, data: CreateCourseDTO) => {
    return await prisma.course.update({
        where: { id },
        data
    });
};

// Eliminar una materia
export const deleteCourse = async (id: number) => {
    return await prisma.course.delete({
        where: { id }
    });
};