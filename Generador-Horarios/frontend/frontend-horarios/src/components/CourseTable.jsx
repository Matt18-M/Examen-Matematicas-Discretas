function CourseTable({ courses, onEditar, onEliminar }) {

    const eliminarMateria = (id, nombre) => {

        const confirmar = window.confirm(

            `¿Está seguro de eliminar la materia "${nombre}"?`

        );

        if (confirmar) {

            onEliminar(id);

        }

    };

    const obtenerClaseDificultad = (difficulty) => {

        switch (difficulty) {

            case "Alta":

                return "badge badge-danger";

            case "Media":

                return "badge badge-warning";

            default:

                return "badge badge-success";

        }

    };

    const obtenerClaseModalidad = (modality) => {

        return modality === "Virtual"

            ? "badge badge-primary"

            : "badge badge-success";

    };

    return (

        <>

            <div className="table-header">

                <div>

                    <span className="table-badge">

                        Materias

                    </span>

                    <h2>

                        Materias Registradas

                    </h2>

                    <p>

                        Administre todas las materias utilizadas por el
                        algoritmo para generar horarios.

                    </p>

                </div>

                <div className="table-counter">

                    <span>

                        {courses.length}

                    </span>

                    <small>

                        Registros

                    </small>

                </div>

            </div>

            <div className="table-responsive">

                <table className="course-table">

                    <thead>

                        <tr>

                            <th>Materia</th>

                            <th>Día</th>

                            <th>Horario</th>

                            <th>Modalidad</th>

                            <th>Dificultad</th>

                            <th>Créditos</th>

                            <th>Prerrequisitos</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            courses.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="8"
                                        className="empty-table"
                                    >

                                        <div className="empty-state">

                                            <div className="empty-icon">

                                                📚

                                            </div>

                                            <h3>

                                                No existen materias registradas

                                            </h3>

                                            <p>

                                                Agregue una materia utilizando
                                                el formulario superior.

                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            ) : (

                                courses.map(course => (

                                    <tr
                                        key={course.id}
                                    >

                                        <td>

                                            <strong>

                                                {course.name}

                                            </strong>

                                        </td>

                                        <td>

                                            {course.day}

                                        </td>

                                        <td>

                                            {course.startTime}

                                            <br />

                                            <small>

                                                {course.endTime}

                                            </small>

                                        </td>

                                        <td>

                                            <span

                                                className={

                                                    obtenerClaseModalidad(

                                                        course.modality

                                                    )

                                                }

                                            >

                                                {course.modality}

                                            </span>

                                        </td>

                                        <td>

                                            <span

                                                className={

                                                    obtenerClaseDificultad(

                                                        course.difficulty

                                                    )

                                                }

                                            >

                                                {course.difficulty}

                                            </span>

                                        </td>

                                        <td>

                                            <strong>

                                                {course.credits}

                                            </strong>

                                        </td>

                                        <td>

                                            {

                                                course.prerequisites.length > 0

                                                    ? course.prerequisites.join(", ")

                                                    : "-"

                                            }

                                        </td>

                                        <td>

                                            <div className="actions">

                                                <button

                                                    className="btn-edit"

                                                    onClick={() =>

                                                        onEditar(course)

                                                    }

                                                >

                                                    ✏️ Editar

                                                </button>

                                                <button

                                                    className="btn-delete"

                                                    onClick={() =>

                                                        eliminarMateria(

                                                            course.id,

                                                            course.name

                                                        )

                                                    }

                                                >

                                                    🗑 Eliminar

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )

                        }

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default CourseTable;