import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScheduleList from "../components/ScheduleList";

import { obtenerHistorial } from "../utils/history";

import "../styles/history-detail.css";

function HorarioDetalle() {

    const { id } = useParams();

    const historial = obtenerHistorial();

    const generacion = historial.find(

        item => item.id.toString() === id

    );

    if (!generacion) {

        return (

            <>

                <Navbar />

                <main className="detail-page">

                    <section className="detail-empty">

                        <div className="detail-empty-icon">

                            ⚠️

                        </div>

                        <h2>

                            La generación solicitada no existe

                        </h2>

                        <p>

                            El horario que intenta consultar fue eliminado o no
                            pertenece al historial.

                        </p>

                        <Link
                            to="/horarios"
                            className="btn btn-primary"
                        >

                            Volver al Historial

                        </Link>

                    </section>

                </main>

            </>

        );

    }

    return (

        <>

            <Navbar />

            <main className="detail-page">

                <section className="detail-hero">

                    <span className="detail-badge">

                        Horario Generado

                    </span>

                    <h1>

                        {generacion.nombre}

                    </h1>

                    <p>

                        Generado el {generacion.fecha}

                    </p>

                </section>

                <section className="detail-summary">

                    <div className="detail-stat">

                        <span>

                            {generacion.schedules.length}

                        </span>

                        <small>

                            Horarios Encontrados

                        </small>

                    </div>

                    <div className="detail-stat">

                        <span>

                            {generacion.totalCombinaciones}

                        </span>

                        <small>

                            Combinaciones Evaluadas

                        </small>

                    </div>

                </section>

                <section className="detail-schedules">

                    <ScheduleList

                        schedules={generacion.schedules}

                    />

                </section>

                <section className="detail-actions">

                    <Link
                        to="/horarios"
                        className="btn btn-secondary"
                    >

                        ← Volver al Historial

                    </Link>

                </section>

            </main>

        </>

    );

}

export default HorarioDetalle;