import { type Request, type Response } from "express";

import { createScheduleConfig, getScheduleConfigs, getScheduleConfigById, updateScheduleConfig, deleteScheduleConfig } from "../services/scheduleConfig.service.js";

// Crear configuración
export const createScheduleConfigController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const config = await createScheduleConfig(req.body);

    res.status(201).json(config);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al registrar la configuración"
    });
  }
};

// Obtener todas las configuraciones
export const getScheduleConfigsController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const configs = await getScheduleConfigs();

    res.status(200).json(configs);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener las configuraciones"
    });
  }
};

// Obtener una configuración
export const getScheduleConfigByIdController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const config = await getScheduleConfigById(id);

    if (!config) {
      res.status(404).json({
        message: "Configuración no encontrada"
      });

      return;
    }

    res.status(200).json(config);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener la configuración"
    });
  }
};

// Actualizar configuración
export const updateScheduleConfigController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const config = await getScheduleConfigById(id);

    if (!config) {
      res.status(404).json({
        message: "Configuración no encontrada"
      });

      return;
    }

    const updatedConfig = await updateScheduleConfig(id, req.body);

    res.status(200).json(updatedConfig);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al actualizar la configuración"
    });
  }
};

// Eliminar configuración
export const deleteScheduleConfigController = async ( req: Request, res: Response ): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const config = await getScheduleConfigById(id);

    if (!config) {
      res.status(404).json({
        message: "Configuración no encontrada"
      });

      return;
    }

    await deleteScheduleConfig(id);

    res.status(200).json({
      message: "Configuración eliminada correctamente"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al eliminar la configuración"
    });
  }
};