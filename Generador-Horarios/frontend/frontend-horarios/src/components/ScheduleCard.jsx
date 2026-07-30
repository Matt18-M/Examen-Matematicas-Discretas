function ScheduleCard({ schedule,number }){

    const creditos=schedule.reduce((total,course)=>total+course.credits,0);

    return(

        <div className="card">

            <h2>

                Horario #{number}

            </h2>

            <p>

                <strong>Total de materias:</strong> {schedule.length}

            </p>

            <p>

                <strong>Total de créditos:</strong> {creditos}

            </p>

            <table className="course-table">

                <thead>

                    <tr>

                        <th>Materia</th>
                        <th>Día</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Modalidad</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        schedule.map(course=>(

                            <tr key={course.id}>

                                <td>{course.name}</td>

                                <td>{course.day}</td>

                                <td>{course.startTime}</td>

                                <td>{course.endTime}</td>

                                <td>{course.modality}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ScheduleCard;