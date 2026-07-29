import prisma from "../config/prisma.js";

export interface CreateScheduleConfigDTO {
  numberOfCourses: number;
  maximumCredits: number;
  maximumDifficultCourses: number;
  requiredCourses: string[];
  requiredModality: string;
  avoidTimeConflicts: boolean;
  validatePrerequisites: boolean;
}

// Crear configuración
export const createScheduleConfig = async (
  data: CreateScheduleConfigDTO
) => {
  return await prisma.scheduleConfig.create({
    data
  });
};

// Obtener todas las configuraciones
export const getScheduleConfigs = async () => {
  return await prisma.scheduleConfig.findMany({
    orderBy: { id: "asc" }
  });
};

// Obtener una configuración
export const getScheduleConfigById = async (id: number) => {
  return await prisma.scheduleConfig.findUnique({
    where: { id }
  });
};

// Actualizar configuración
export const updateScheduleConfig = async (
  id: number,
  data: CreateScheduleConfigDTO
) => {
  return await prisma.scheduleConfig.update({
    where: { id },
    data
  });
};

// Eliminar configuración
export const deleteScheduleConfig = async (id: number) => {
  return await prisma.scheduleConfig.delete({
    where: { id }
  });
};