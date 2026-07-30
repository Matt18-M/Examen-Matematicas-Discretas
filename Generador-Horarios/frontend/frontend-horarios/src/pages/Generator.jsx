import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ConfigForm from "../components/ConfigForm";
import api from "../services/api";

import { guardarHistorial } from "../utils/history";

import "../styles/generator.css";

function Generator() {

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        const cargarMaterias = async () => {

            try {

                const { data } = await api.get("/courses");

                setCourses(data);

            }

            catch (error) {

                console.error(error);

                setError("No fue posible cargar las materias.");

            }

        };

        cargarMaterias();

    }, []);

    const generarHorarios = async ({ nombreHorario, configuracion }) => {

        if (!nombreHorario.trim()) {

            setError("Debe ingresar un nombre para el horario.");

            return;

        }

        setLoading(true);

        setError("");

        try {

            const { data } = await api.post(

                "/scheduler/schedules/generate",

                configuracion

            );

            guardarHistorial(

                nombreHorario.trim(),

                data

            );

            navigate("/results", {

                state: {

                    ...data,

                    nombre: nombreHorario.trim()

                }

            });

        }

        catch (error) {

            console.error(error);

            setError(

                error.response?.data?.message ??

                "No fue posible generar los horarios."

            );

        }

        finally {

            setLoading(false);

        }

    };

    const totalCreditos = courses.reduce(

        (total, course) => total + course.credits,

        0

    );

    const virtuales = courses.filter(

        course => course.modality === "Virtual"

    ).length;

    return (

        <>

            <Navbar />

            <main className="generator-page">

                <section className="generator-hero">

                    <h1>

                        Generador Inteligente de Horarios

                    </h1>

                    <p>

                        Configure las restricciones y permita que el algoritmo
                        genere automáticamente todas las combinaciones válidas
                        de horarios para su semestre.

                    </p>

                </section>

                {

                    error && (

                        <div className="generator-error">

                            {error}

                        </div>

                    )

                }

                <section className="generator-stats">

                    <div className="generator-stat">

                        <div className="generator-stat-number">

                            {courses.length}

                        </div>

                        <div className="generator-stat-title">

                            Materias Disponibles

                        </div>

                    </div>

                    <div className="generator-stat">

                        <div className="generator-stat-number">

                            {virtuales}

                        </div>

                        <div className="generator-stat-title">

                            Materias Virtuales

                        </div>

                    </div>

                    <div className="generator-stat">

                        <div className="generator-stat-number">

                            {totalCreditos}

                        </div>

                        <div className="generator-stat-title">

                            Créditos Totales

                        </div>

                    </div>

                </section>

                <section className="generator-config">

                    <ConfigForm

                        courses={courses}

                        onGenerar={generarHorarios}

                    />

                </section>

                {

                    loading && (

                        <section className="generator-loading">

                            <div className="loading-spinner"></div>

                            <h3>

                                Generando horarios...

                            </h3>

                            <p>

                                Analizando todas las combinaciones posibles.

                            </p>

                        </section>

                    )

                }

            </main>

        </>

    );

}

export default Generator;