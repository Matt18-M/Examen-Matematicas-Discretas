import { useLocation, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScheduleCard from "../components/ScheduleCard";

function Results() {

    const { state } = useLocation();

    const data = state;

    if (!data) {

        return (

            <>
                <Navbar />

                <div className="courses-container">

                    <div className="card">

                        <h2>No existe una generación reciente.</h2>

                        <p>
                            Primero genere un horario.
                        </p>

                        <Link
                            to="/generator"
                            className="btn btn-primary"
                        >
                            Ir al Generador
                        </Link>

                    </div>

                </div>

            </>

        );

    }

    const primerHorario = data.schedules?.[0];

    const materiasHorario = primerHorario?.materias ?? [];

    const horarioValido = primerHorario?.evaluacion?.valido ?? false;

    return (

        <>

            <Navbar />

            <div className="courses-container">

                <div className="page-header">

                    <h1>

                        {data.nombre}

                    </h1>

                    <p>

                        Horario generado correctamente.

                    </p>

                </div>

                {/* ===========================
                    RESUMEN
                =========================== */}

                <div className="card">

                    <h2>Resumen</h2>

                    <div className="summary-grid">

                        <p>
                            <strong>Materias registradas:</strong>{" "}
                            {data.totalMaterias}
                        </p>

                        <p>
                            <strong>Materias por horario:</strong>{" "}
                            {data.materiasPorHorario}
                        </p>

                        <p>
                            <strong>Combinaciones evaluadas:</strong>{" "}
                            {data.totalCombinaciones}
                        </p>

                        <p>
                            <strong>Horarios válidos:</strong>{" "}
                            {data.horariosValidos}
                        </p>

                        <p>
                            <strong>Horarios descartados:</strong>{" "}
                            {data.horariosDescartados}
                        </p>

                    </div>

                </div>

                    {/* ===========================
                        MATEMÁTICAS DISCRETAS
                    =========================== */}

                    <div className="card">

                        <h2
                            style={{
                                textAlign: "center",
                                marginBottom: "30px"
                            }}
                        >
                            Aplicación de Matemáticas Discretas
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "20px"
                            }}
                        >

                            <div
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "15px",
                                    padding: "20px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,.08)"
                                }}
                            >

                                <h3 style={{ color: "#2563eb" }}>

                                    📚 Teoría de Conjuntos

                                </h3>

                                <hr />

                                <p>

                                    <strong>Conjunto Universal</strong>

                                </p>

                                <h2>

                                    U = {data.totalMaterias}

                                </h2>

                                <p>

                                    Materias registradas

                                </p>

                                <hr />

                                <p>

                                    <strong>Conjunto Solución</strong>

                                </p>

                                <h2>

                                    S = {materiasHorario.length}

                                </h2>

                                <p>

                                    Materias seleccionadas

                                </p>

                                <p>

                                    <strong>|S| = {materiasHorario.length}</strong>

                                </p>

                                <p
                                    style={{
                                        color: "#16a34a",
                                        fontWeight: "bold"
                                    }}
                                >

                                    ✔ S ⊆ U

                                </p>

                            </div>

                            <div
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "15px",
                                    padding: "20px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,.08)"
                                }}
                            >

                                <h3 style={{ color: "#2563eb" }}>

                                    🧮 Cálculo Combinatorio

                                </h3>

                                <hr />

                                <h1
                                    style={{
                                        color: "#2563eb",
                                        marginBottom: "10px"
                                    }}
                                >

                                    {data.totalCombinaciones}

                                </h1>

                                <p>

                                    Combinaciones evaluadas

                                </p>

                                <hr />

                                <p>

                                    El algoritmo analizó todas las combinaciones posibles y
                                    seleccionó únicamente aquellas que cumplen las restricciones.

                                </p>

                            </div>

                            <div
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "15px",
                                    padding: "20px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,.08)"
                                }}
                            >

                                <h3 style={{ color: "#2563eb" }}>

                                    ⚙ Restricciones

                                </h3>

                                <hr />

                                <p>✔ Créditos permitidos</p>

                                <p>✔ Sin cruces de horario</p>

                                <p>✔ Materias difíciles permitidas</p>

                                <p>✔ Modalidad válida</p>

                                <p>✔ Prerrequisitos validados</p>

                            </div>

                            <div
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "15px",
                                    padding: "20px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,.08)"
                                }}
                            >

                                <h3 style={{ color: "#2563eb" }}>

                                    🧠 Lógica Proposicional

                                </h3>

                                <hr />

                                <p>

                                    <strong>P</strong>

                                </p>

                                <p>

                                    El horario cumple las restricciones.

                                </p>

                                <br />

                                <p>

                                    <strong>Q</strong>

                                </p>

                                <p>

                                    El horario puede generarse.

                                </p>

                                <br />

                                <h2>

                                    P → Q

                                </h2>

                                <div
                                    style={{
                                        marginTop: "15px",
                                        color: horarioValido ? "#16a34a" : "#dc2626",
                                        fontWeight: "bold",
                                        fontSize: "18px"
                                    }}
                                >

                                    {

                                        horarioValido

                                            ? "✔ Verdadero"

                                            : "✘ Falso"

                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                {/* ===========================
                    HORARIO
                =========================== */}

                {

                    primerHorario && (

                        <ScheduleCard

                            number={1}

                            schedule={primerHorario}

                        />

                    )

                }

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        marginTop: "20px"
                    }}
                >

                    <Link
                        to="/generator"
                        className="btn btn-secondary"
                    >

                        Generar otro

                    </Link>

                    <Link
                        to="/horarios"
                        className="btn btn-primary"
                    >

                        Ver historial

                    </Link>

                </div>

            </div>

        </>

    );

}

export default Results;