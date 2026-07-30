import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { obtenerHistorial, limpiarHistorial } from "../utils/history";
import "../styles/history.css";

function HorariosGenerados() {
    const historial = obtenerHistorial()

    const eliminarHistorial = () => {

    if (!window.confirm("¿Está seguro de eliminar todo el historial de horarios?")) {
        return;
    }

    limpiarHistorial();

    window.location.reload();

};

    return (

        <>

            <Navbar />

            <main className="history-page">

                <section className="history-hero">

                    <span className="history-badge">

                        Historial

                    </span>

                    <h1>

                        Historial de Horarios

                    </h1>

                    <p>

                                        <div
                    style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >

                    <button
                        className="btn btn-danger"
                        onClick={eliminarHistorial}
                    >

                        🗑 Limpiar historial

                    </button>

                </div>

                        Consulte todas las generaciones realizadas y vuelva a
                        visualizar cualquiera de los horarios creados.

                    </p>



                </section>

                {

                    historial.length === 0 ? (

                        <section className="history-empty">

                            <div className="history-empty-icon">

                                📅

                            </div>

                            <h2>

                                Aún no existen horarios generados

                            </h2>

                            <p>

                                Cree su primera planificación para comenzar a
                                guardar el historial.

                            </p>

                            <Link
                                to="/generator"
                                className="btn btn-primary"
                            >

                                Generar Horario

                            </Link>

                        </section>

                    ) : (

                        <section className="history-grid">

                            {

                                historial.map((generacion, index) => (

                                    <article
                                        className="history-card"
                                        key={generacion.id}
                                    >

                                        <div className="history-card-header">

                                            <div>

                                                <span className="history-tag">

                                                    Generación #{index + 1}

                                                </span>

                                                <h2>

                                                    {generacion.nombre}

                                                </h2>

                                            </div>

                                            <div className="history-date">

                                                📅 {generacion.fecha}

                                            </div>

                                        </div>

                                        <div className="history-stats">

                                            <div className="history-stat">

                                                <span>

                                                    {generacion.schedules.length}

                                                </span>

                                                <small>

                                                    Horarios

                                                </small>

                                            </div>

                                            <div className="history-stat">

                                                <span>

                                                    {generacion.totalCombinaciones}

                                                </span>

                                                <small>

                                                    Evaluadas

                                                </small>

                                            </div>

                                        </div>

                                        <div className="history-actions">

                                            <Link
                                                to={`/horarios/${generacion.id}`}
                                                className="btn btn-primary"
                                            >

                                                Ver Detalle

                                            </Link>

                                        </div>

                                    </article>

                                ))

                            }

                        </section>

                    )

                }

            </main>

        </>

    );

}

export default HorariosGenerados;