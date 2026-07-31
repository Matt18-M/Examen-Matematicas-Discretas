import { useEffect, useState } from "react";

function CourseForm({ onGuardar, onActualizar, courseEdit }) {

    const estadoInicial = {
        name: "",
        parallel: "A",
        day: "Lunes",
        startTime: "",
        endTime: "",
        modality: "Presencial",
        difficulty: "Media",
        credits: 1,
        prerequisites: ""
    };

    const [formData, setFormData] = useState(estadoInicial);

    useEffect(() => {

        if (!courseEdit) {

            setFormData(estadoInicial);

            return;

        }

        setFormData({

            name: courseEdit.name,
            day: courseEdit.day,
            startTime: courseEdit.startTime,
            endTime: courseEdit.endTime,
            modality: courseEdit.modality,
            difficulty: courseEdit.difficulty,
            credits: courseEdit.credits,
            parallel: courseEdit.parallel,

            prerequisites: Array.isArray(courseEdit.prerequisites)

                ? courseEdit.prerequisites.join(", ")

                : ""

        });

    }, [courseEdit]);

    const handleChange = ({ target }) => {

        const { name, value } = target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.startTime >= formData.endTime) {

            alert("La hora de inicio debe ser menor que la hora de fin.");

            return;

        }

        if (Number(formData.credits) <= 0) {

            alert("Los créditos deben ser mayores a cero.");

            return;

        }

        const course = {

            ...formData,

            name: formData.name.trim(),

            credits: Number(formData.credits),

            prerequisites: formData.prerequisites
                .split(",")
                .map(item => item.trim())
                .filter(item => item.length > 0)

        };

        if (!course.name) {

            alert("Ingrese un nombre para la materia.");

            return;

        }

        if (courseEdit) {

            await onActualizar(course);

        }

        else {

            await onGuardar(course);

        }

        setFormData(estadoInicial);

    };

    return (

        <form
            className="course-form"
            onSubmit={handleSubmit}
        >

            <div className="section-title">

                <span>

                    📚 Gestión Académica

                </span>

                <h2>

                    {

                        courseEdit

                            ? "Editar Materia"

                            : "Registrar Nueva Materia"

                    }

                </h2>

                <p>

                    Complete toda la información necesaria para que el
                    algoritmo pueda generar horarios correctamente.

                </p>

            </div>

            <div className="form-grid">

                <div className="form-group">

                    <label>

                        Nombre de la materia

                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Matemáticas Discretas"
                        required
                    />

                </div>

                <div className="form-group">

                    <label>

                        Día

                    </label>

                    <select
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                    >

                        <option>Lunes</option>
                        <option>Martes</option>
                        <option>Miércoles</option>
                        <option>Jueves</option>
                        <option>Viernes</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Paralelo

                    </label>

                    <select
                        name="parallel"
                        value={formData.parallel}
                        onChange={handleChange}
                    >

                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Hora de inicio

                    </label>

                    <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>

                        Hora de fin

                    </label>

                    <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>

                        Modalidad

                    </label>

                    <select
                        name="modality"
                        value={formData.modality}
                        onChange={handleChange}
                    >

                        <option>Presencial</option>
                        <option>Virtual</option>
                        <option>Híbrida</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Dificultad

                    </label>

                    <select
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                    >

                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Créditos

                    </label>

                    <input
                        type="number"
                        min="1"
                        name="credits"
                        value={formData.credits}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>

                        Prerrequisitos

                    </label>

                    <input
                        type="text"
                        name="prerequisites"
                        value={formData.prerequisites}
                        onChange={handleChange}
                        placeholder="Ej. Álgebra, Programación I"
                    />

                </div>

            </div>

            <div className="form-actions">

                <button
                    className="btn btn-primary"
                    type="submit"
                >

                    {

                        courseEdit

                            ? "Actualizar Materia"

                            : "Guardar Materia"

                    }

                </button>

            </div>

        </form>

    );

}

export default CourseForm;