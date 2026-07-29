import prisma from "../config/prisma.js";

export const obtenerDatosHorario = async (numeroMaterias: number) => {

    const materias = await prisma.course.findMany({
        orderBy: { id: "asc" }
    });

    const configuracion = await prisma.scheduleConfig.findFirst({
        orderBy: { id: "desc" }
    });

    return {
        materias,
        configuracion,
        numeroMaterias
    };

};