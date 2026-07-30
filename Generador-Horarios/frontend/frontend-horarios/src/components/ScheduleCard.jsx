function ScheduleCard({ schedule, number }) {

    const { materias, evaluacion } = schedule;

    const creditos = materias.reduce(
        (total, course) => total + course.credits,
        0
    );

    const materiasDificiles = materias.filter(
        (course) => course.difficulty.toLowerCase() === "alta"
    ).length;

    return (

        <article className="schedule-card">

            <div className="schedule-card-header">

                <div>

                    <span className="schedule-badge">

                        Horario #{number}

                    </span>

                    <h2>

                        Opción {number}

                    </h2>

                </div>

                <span
                    className={
                        evaluacion.valido
                            ? "status-valid"
                            : "status-invalid"
                    }
                >

                    {
                        evaluacion.valido
                            ? "✔ Horario válido"
                            : "✘ Horario descartado"
                    }

                </span>

            </div>

            <div className="schedule-summary">

                <div className="summary-item">

                    <span>{materias.length}</span>

                    <small>Materias</small>

                </div>

                <div className="summary-item">

                    <span>{creditos}</span>

                    <small>Créditos</small>

                </div>

                <div className="summary-item">

                    <span>{materiasDificiles}</span>

                    <small>Dificultad Alta</small>

                </div>

            </div>

            {

                !evaluacion.valido &&
                evaluacion.razones.length > 0 && (

                    <div className="schedule-warning">

                        <h3>

                            Motivos del descarte

                        </h3>

                        <ul>

                            {

                                evaluacion.razones.map((razon, index) => (

                                    <li key={index}>

                                        {razon}

                                    </li>

                                ))

                            }

                        </ul>

                    </div>

                )

            }

            <div className="table-wrapper">

                <table className="course-table">

                    <thead>

                        <tr>

                            <th>Materia</th>
                            <th>Día</th>
                            <th>Inicio</th>
                            <th>Fin</th>
                            <th>Modalidad</th>
                            <th>Créditos</th>
                            <th>Dificultad</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            materias.map((course) => (

                                <tr key={course.id}>

                                    <td>

                                        <strong>{course.name}</strong>

                                    </td>

                                    <td>{course.day}</td>

                                    <td>{course.startTime}</td>

                                    <td>{course.endTime}</td>

                                    <td>

                                        <span className="course-pill">

                                            {course.modality}

                                        </span>

                                    </td>

                                    <td>{course.credits}</td>

                                    <td>

                                        <span
                                            className={
                                                course.difficulty.toLowerCase() === "alta"
                                                    ? "difficulty-high"
                                                    : course.difficulty.toLowerCase() === "media"
                                                    ? "difficulty-medium"
                                                    : "difficulty-low"
                                            }
                                        >

                                            {course.difficulty}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </article>

    );

}

export default ScheduleCard;