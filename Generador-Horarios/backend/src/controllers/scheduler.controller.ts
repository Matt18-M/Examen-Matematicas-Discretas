import { type Request, type Response } from "express";

import { calculateCombinationCount } from "../algorithms/combinations.js";

// Calcular número de combinaciones
export const calculateCombinationsController = async (
  req: Request,
  res: Response
): Promise<void> => {
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