import { type Request, type Response, type NextFunction } from "express";

export const notFound = (req: Request, res: Response): void => {
    res.status(404).json({
        success: false,
        message: `La ruta ${req.originalUrl} no existe.`
    });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(err);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Error interno del servidor."
    });
};