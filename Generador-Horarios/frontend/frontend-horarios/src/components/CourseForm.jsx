function CourseForm(){

    return(

        <>

            <h2>Nueva Materia</h2>

            <form className="course-form">

                <label>Nombre</label>
                <input type="text"/>

                <label>Día</label>

                <select>

                    <option>Lunes</option>
                    <option>Martes</option>
                    <option>Miércoles</option>
                    <option>Jueves</option>
                    <option>Viernes</option>

                </select>

                <label>Hora Inicio</label>
                <input type="time"/>

                <label>Hora Fin</label>
                <input type="time"/>

                <label>Modalidad</label>

                <select>

                    <option>Presencial</option>
                    <option>Virtual</option>

                </select>

                <label>Dificultad</label>

                <select>

                    <option>Baja</option>
                    <option>Media</option>
                    <option>Alta</option>

                </select>

                <label>Créditos</label>
                <input type="number"/>

                <label>Prerrequisitos</label>
                <input
                    type="text"
                    placeholder="Separados por coma"
                />

                <button>

                    Guardar Materia

                </button>

            </form>

        </>

    );

}

export default CourseForm;