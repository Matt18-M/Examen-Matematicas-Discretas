import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "../styles/home.css";

function Home() {

    return (

        <>

            <Navbar />

            <main className="home-page">

                <section className="home-hero">

                    <span className="home-badge">

                        Sistema basado en Matemáticas Discretas

                    </span>

                    <h1>

                        Generador Inteligente de Horarios

                    </h1>

                    <p>

                        Optimice la planificación académica generando horarios
                        automáticamente, respetando prerrequisitos, evitando
                        cruces de materias y aplicando todas las restricciones
                        configuradas por el estudiante.

                    </p>

                    <div className="home-actions">

                        <Link
                            to="/courses"
                            className="btn btn-primary"
                        >

                            Administrar Materias

                        </Link>

                        <Link
                            to="/generator"
                            className="btn btn-success"
                        >

                            Generar Horarios

                        </Link>

                    </div>

                </section>

                <section className="home-features">

                    <article className="feature-card">

                        <div className="feature-icon">

                            ⚡

                        </div>

                        <h3>

                            Generación Automática

                        </h3>

                        <p>

                            Calcula todas las combinaciones posibles de horarios
                            en pocos segundos utilizando un algoritmo eficiente.

                        </p>

                    </article>

                    <article className="feature-card">

                        <div className="feature-icon">

                            🧠

                        </div>

                        <h3>

                            Restricciones Inteligentes

                        </h3>

                        <p>

                            Evita conflictos de horario, valida
                            prerrequisitos y considera las materias ya
                            aprobadas.

                        </p>

                    </article>

                    <article className="feature-card">

                        <div className="feature-icon">

                            📊

                        </div>

                        <h3>

                            Historial Organizado

                        </h3>

                        <p>

                            Consulte todas las generaciones realizadas y vuelva
                            a revisar cualquier horario cuando lo necesite.

                        </p>

                    </article>

                </section>

                <section className="home-process">

                    <h2>

                        ¿Cómo funciona?

                    </h2>

                    <p>

                        El proceso completo consta únicamente de tres pasos.

                    </p>

                    <div className="process-grid">

                        <div className="process-card">

                            <div className="process-number">

                                1

                            </div>

                            <h3>

                                Registrar Materias

                            </h3>

                            <p>

                                Ingrese todas las materias disponibles junto con
                                sus horarios, modalidad, créditos y
                                prerrequisitos.

                            </p>

                        </div>

                        <div className="process-card">

                            <div className="process-number">

                                2

                            </div>

                            <h3>

                                Configurar Restricciones

                            </h3>

                            <p>

                                Seleccione materias obligatorias, aprobadas y
                                preferencias para personalizar la generación.

                            </p>

                        </div>

                        <div className="process-card">

                            <div className="process-number">

                                3

                            </div>

                            <h3>

                                Obtener Horarios

                            </h3>

                            <p>

                                El sistema analiza todas las combinaciones
                                posibles y presenta únicamente las opciones
                                válidas.

                            </p>

                        </div>

                    </div>

                </section>

            </main>

        </>

    );

}

export default Home;