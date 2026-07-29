import {type  Course } from "../../generated/prisma/client.js";

const convertirAMinutos = (hora: string): number => {

    const partes = hora.split(":");

    const horas = Number(partes[0] ?? 0);
    const minutos = Number(partes[1] ?? 0);

    return (horas * 60) + minutos;

};

export const tieneCruceHorario = (materias: Course[]): boolean => {

    for (let i = 0; i < materias.length; i++) {

        for (let j = i + 1; j < materias.length; j++) {

            const primeraMateria = materias[i]!;
            const segundaMateria = materias[j]!;
            
            if (primeraMateria.day !== segundaMateria.day) {
                continue;
            }

            const inicioPrimera = convertirAMinutos(primeraMateria.startTime);
            const finPrimera = convertirAMinutos(primeraMateria.endTime);

            const inicioSegunda = convertirAMinutos(segundaMateria.startTime);
            const finSegunda = convertirAMinutos(segundaMateria.endTime);

            const existeCruce =
                inicioPrimera < finSegunda &&
                inicioSegunda < finPrimera;

            if (existeCruce) {
                return true;
            }

        }

    }

    return false;

};