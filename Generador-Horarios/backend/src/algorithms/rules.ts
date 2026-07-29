import type { Course, ScheduleConfig } from "../../generated/prisma/client.js";

import { tieneCruceHorario } from "./conflicts.js";

// Calcular créditos de una combinación
export const calcularCreditos = (materias: Course[]): number => {

    return materias.reduce((total, materia) => total + materia.credits, 0);

};

// Contar materias difíciles
export const contarMateriasDificiles = (materias: Course[]): number => {

    return materias.filter(materia => materia.difficulty.toLowerCase() === "alta").length;

};

// Validar materias obligatorias
export const cumpleMateriasObligatorias = (materias: Course[], materiasObligatorias: string[]): boolean => {

    return materiasObligatorias.every(obligatoria => materias.some(materia => materia.name === obligatoria));

};

// Validar modalidad
export const cumpleModalidad = (materias: Course[], modalidad: string): boolean => {

    if (!modalidad) return true;

    return materias.every(materia => materia.modality === modalidad);

};

// Validar prerrequisitos
export const cumplePrerequisitos = (materias: Course[]): boolean => {

    const nombresMaterias = new Set(materias.map(materia => materia.name));

    return materias.every(materia => materia.prerequisites.every(prerequisito => nombresMaterias.has(prerequisito)));

};

export interface ResultadoEvaluacion {
    valido: boolean;
    razones: string[];
}

// Evaluar horario
export const evaluarHorario = (materias: Course[], configuracion: ScheduleConfig): ResultadoEvaluacion => {

    const razones: string[] = [];

    if (configuracion.avoidTimeConflicts && tieneCruceHorario(materias)) {
        razones.push("El horario tiene cruces.");
    }

    if (calcularCreditos(materias) > configuracion.maximumCredits) {
        razones.push("Supera el máximo de créditos.");
    }

    if (contarMateriasDificiles(materias) > configuracion.maximumDifficultCourses) {
        razones.push("Supera el máximo de materias difíciles.");
    }

    if (!cumpleMateriasObligatorias(materias, configuracion.requiredCourses)) {
        razones.push("No contiene todas las materias obligatorias.");
    }

    if (!cumpleModalidad(materias, configuracion.requiredModality)) {
        razones.push("No cumple con la modalidad requerida.");
    }

    if (configuracion.validatePrerequisites && !cumplePrerequisitos(materias)) {
        razones.push("No cumple los prerrequisitos.");
    }

    return {
        valido: razones.length === 0,
        razones
    };

};

// Validar toda la combinación
export const esHorarioValido = (materias: Course[], configuracion: ScheduleConfig): boolean => {

    return evaluarHorario(materias, configuracion).valido;

};