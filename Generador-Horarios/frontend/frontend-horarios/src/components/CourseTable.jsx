function CourseTable({ courses }){

    return(

        <>

            <h2>Materias Registradas</h2>

            <table className="course-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Día</th>
                        <th>Horario</th>
                        <th>Modalidad</th>
                        <th>Créditos</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        courses.length===0 ?

                        (

                            <tr>

                                <td colSpan="7">

                                    No existen materias registradas.

                                </td>

                            </tr>

                        )

                        :

                        (

                            courses.map(course=>(

                                <tr key={course.id}>

                                    <td>{course.id}</td>

                                    <td>{course.name}</td>

                                    <td>{course.day}</td>

                                    <td>

                                        {course.startTime} - {course.endTime}

                                    </td>

                                    <td>{course.modality}</td>

                                    <td>{course.credits}</td>

                                    <td>

                                        <button className="btn-edit">

                                            Editar

                                        </button>

                                        <button className="btn-delete">

                                            Eliminar

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </>

    );

}

export default CourseTable;