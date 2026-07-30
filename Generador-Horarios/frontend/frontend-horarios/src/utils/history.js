const STORAGE_KEY = "historialHorarios";

export function guardarHistorial(nombre, resultado) {

    const historial = obtenerHistorial();

    historial.push({

        id: Date.now(),

        nombre,

        fecha: new Date().toLocaleString(),

        ...resultado

    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(historial)
    );

}

export function obtenerHistorial() {

    const historial = localStorage.getItem(STORAGE_KEY);

    return historial
        ? JSON.parse(historial)
        : [];

}

export function obtenerUltimaGeneracion() {

    const historial = obtenerHistorial();

    return historial.length > 0
        ? historial[historial.length - 1]
        : null;

}

export function limpiarHistorial() {

    localStorage.removeItem(STORAGE_KEY);

}