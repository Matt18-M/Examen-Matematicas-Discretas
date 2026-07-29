import { type Request, type Response } from "express";

import { calculateCombinationCount, generateCombinations } from "../algorithms/combinations.js";

// Calcular número de combinaciones
export const calculateCombinationsController = async ( req: Request, res: Response): Promise<void> => {
  try {
    const n = Number(req.query.n);
    const r = Number(req.query.r);

    if (isNaN(n) || isNaN(r)) {
      res.status(400).json({
        message: "Los parámetros n y r son obligatorios."
      });

      return;
    }

    const totalCombinations = calculateCombinationCount(n, r);

    res.status(200).json({
      totalCombinations
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al calcular las combinaciones."
    });
  }
};


// Generar combinaciones
export const generateCombinationsController = async ( req: Request, res: Response ): Promise<void> => {

  try {

    const items = req.body.items;
    const size = Number(req.body.size);

    if (!Array.isArray(items)) {

      res.status(400).json({
        message: "Debe enviar un arreglo de elementos."
      });

      return;

    }

    const combinations = generateCombinations(items, size);

    res.status(200).json({
      totalCombinations: combinations.length,
      combinations
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error al generar las combinaciones."
    });

  }

};