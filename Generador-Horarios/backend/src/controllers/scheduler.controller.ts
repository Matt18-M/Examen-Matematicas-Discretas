import { type Request, type Response } from "express";

import { calcularNumeroCombinaciones, generarCombinaciones } from "../algorithms/combinations.js";
import { crearConjunto, cardinalidad } from "../algorithms/sets.js";
import { esHorarioValido } from "../algorithms/rules.js";
import { obtenerDatosHorario } from "../services/scheduler.service.js";

// Calcular número de combinaciones
export const calcularNumeroCombinacionesController = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const n = Number(req.query.n);
        const r = Number(req.query.r);

        if (isNaN(n) || isNaN(r)) {
            res.status(400).json({
                message: "Los parámetros n y r son obligatorios."
            });
            return;
        }

        const totalCombinaciones = calcularNumeroCombinaciones(n, r);

        res.status(200).json({
            totalCombinaciones
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al calcular las combinaciones."
        });

    }

};

// Generar combinaciones
export const generarCombinacionesController = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const elementos = req.body.items;
        const tamaño = Number(req.body.size);

        if (!Array.isArray(elementos)) {
            res.status(400).json({
                message: "Debe enviar un arreglo de elementos."
            });
            return;
        }

        const combinaciones = generarCombinaciones(
            elementos,
            tamaño
        );

        res.status(200).json({
            totalCombinaciones: combinaciones.length,
            combinaciones
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al generar las combinaciones."
        });

    }

};

// Analizar conjunto
export const analizarConjuntoController = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const { items } = req.body;

        if (!Array.isArray(items)) {
            res.status(400).json({
                message: "Debe enviar un arreglo."
            });
            return;
        }

        const conjunto = crearConjunto(items);

        res.status(200).json({
            elementosUnicos: [...conjunto],
            cardinalidad: cardinalidad(conjunto)
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al analizar el conjunto."
        });

    }

};

// Generar combinaciones de materias
export const generarCombinacionesMateriasController = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const numeroMaterias = Number(req.query.size);

        if (isNaN(numeroMaterias)) {
            res.status(400).json({
                message: "Debe indicar el tamaño de la combinación."
            });
            return;
        }

        const { materias } = await obtenerDatosHorario(numeroMaterias);

        const combinaciones = generarCombinaciones(
            materias,
            numeroMaterias
        );

        res.status(200).json({
            materiasDisponibles: materias.length,
            totalCombinaciones: combinaciones.length,
            combinaciones
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al generar combinaciones de materias."
        });

    }

};

// Generar horarios válidos
export const generarHorariosValidosController = async ( req: Request, res: Response ): Promise<void> => {

    try {

        const numeroMaterias = Number(req.query.size);

        if (isNaN(numeroMaterias)) {
            res.status(400).json({
                message: "Debe indicar el tamaño de la combinación."
            });
            return;
        }

        const {
            materias,
            configuracion
        } = await obtenerDatosHorario(numeroMaterias);

        if (!configuracion) {
            res.status(404).json({
                message: "No existe una configuración registrada."
            });
            return;
        }

        const combinaciones = generarCombinaciones(
            materias,
            numeroMaterias
        );

        const horariosValidos = combinaciones.filter(combinacion =>
            esHorarioValido(
                combinacion,
                configuracion
            )
        );

        res.status(200).json({
            materiasDisponibles: materias.length,
            totalCombinaciones: combinaciones.length,
            totalHorariosValidos: horariosValidos.length,
            horariosValidos
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al generar horarios válidos."
        });

    }

};