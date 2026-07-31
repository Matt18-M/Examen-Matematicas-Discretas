import { useState } from "react";

function ConfigForm({ courses, onGenerar }) {

    const [nombreHorario, setNombreHorario] = useState("");

    const [config, setConfig] = useState({

        numberOfCourses: 5,
        maximumCredits: 24,
        maximumDifficultCourses: 2,
        requiredCourses: [],
        requiredModality: "",
        avoidTimeConflicts: true,
        validatePrerequisites: true,
        completedCourses: []

    });


    const handleChange = ({ target }) => {

        const { name, value, type, checked } = target;

        setConfig((prev) => ({

            ...prev,

            [name]:

                type === "checkbox"
                    ? checked
                    : type === "number"
                        ? Number(value)
                        : value

        }));

    };

    const toggleArrayValue = (field, value) => {

        setConfig((prev) => ({

            ...prev,

            [field]:

                prev[field].includes(value)

                    ? prev[field].filter(item => item !== value)

                    : [...prev[field], value]

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!nombreHorario.trim()) {

            alert("Ingrese un nombre para el horario.");

            return;

        }

        onGenerar({

            nombreHorario,
            configuracion: {
                ...config,
                numberOfCourses: config.requiredCourses.length
            }

        });

    };

    return (

        <form
            className="course-form"
            onSubmit={handleSubmit}
        >

            <div className="card">

                <div className="card-header">

                    <h2 className="card-title">
                        Información General
                    </h2>

                </div>

                <div className="form-grid">

                    <div className="form-group">
                        <label>
                            Nombre del horario
                        </label>

                        <input

                            type="text"
                            placeholder="Ej. Sexto Semestre A"
                            value={nombreHorario}
                            onChange={(e) =>
                                setNombreHorario(e.target.value)
                            }

                        />

                    </div>

                    <div className="form-group">
                        <label> Modalidad </label>

                        <select

                            name="requiredModality"
                            value={config.requiredModality}
                            onChange={handleChange} >

                            <option value=""> Todas </option>

                            <option value="Presencial"> Presencial </option>

                            <option value="Virtual"> Virtual </option>

                            <option value="Híbrida"> Híbrida </option>

                        </select>

                    </div>

                    
                    <div className="form-group">

                        <label> Máximo de créditos </label>

                        <input

                            type="number"
                            name="maximumCredits"
                            value={config.maximumCredits}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label> Máximo de materias difíciles </label>

                        <input

                            type="number"
                            name="maximumDifficultCourses"
                            value={config.maximumDifficultCourses}
                            onChange={handleChange}
                        />

                    </div>

                </div>

            </div>

            <div
                className="card"
                style={{ marginTop: "25px" }}
            >

                <div className="card-header">

                    <h2 className="card-title">
                        Seleccione las materias que desea incluir en el horario.
                    </h2>

                </div>

                <div className="checkbox-grid">

                    {

                        courses.map(course => (

                            <label
                                key={course.id}
                                className="checkbox-card"
                            >

                                <input

                                    type="checkbox"
                                    checked={
                                        config.requiredCourses.includes(
                                            course.name)
                                    } onChange={() => toggleArrayValue(

                                            "requiredCourses",
                                            course.name
                                        )
                                    }
                                />


                                <span>

                                    {course.name}

                                    <span
                                        style={{
                                            color: "#9ca3af",
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            marginLeft: "6px"
                                        }}
                                    >
                                        ({course.parallel})
                                    </span>

                                </span>

                            </label>

                        ))
                    }
                </div>
            </div>


            <div
                className="card"
                style={{ marginTop: "25px" }}
            >

                <div className="card-header">

                    <h2 className="card-title">
                        Materias Aprobadas
                    </h2>

                </div>

                <div className="checkbox-grid">

                        {
                        courses.map(course => (
                            <label
                                key={course.id}
                                className="checkbox-card">
                                <input
                                    type="checkbox"
                                    checked={
                                        config.completedCourses.includes(
                                            course.name
                                        )
                                    } onChange={() =>
                                        toggleArrayValue("completedCourses",course.name)
                                    }

                                />

                                <span>

                                {course.name}

                                <span
                                    style={{
                                        color: "#9ca3af",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        marginLeft: "6px"
                                    }}
                                >
                                    ({course.parallel})
                                </span>

                            </span>

                            </label>

                        ))

                    }

                </div>

            </div>

            <div
                className="card"
                style={{ marginTop: "25px" }}
            >

                <div className="card-header">

                    <h2 className="card-title">

                        Restricciones

                    </h2>

                </div>

                <div className="checkbox-grid">

                    <label className="checkbox-card">

                        <input

                            type="checkbox"

                            name="avoidTimeConflicts"

                            checked={config.avoidTimeConflicts}

                            onChange={handleChange}

                        />

                        <span>

                            Evitar cruces de horario

                        </span>

                    </label>

                    <label className="checkbox-card">

                        <input

                            type="checkbox"

                            name="validatePrerequisites"

                            checked={config.validatePrerequisites}

                            onChange={handleChange}

                        />

                        <span>

                            Validar prerrequisitos

                        </span>

                    </label>

                </div>

            </div>

            <div
                className="form-actions"
                style={{ marginTop: "35px" }}
            >

                <button

                    className="btn btn-primary"

                    type="submit"

                >

                    Generar Horarios

                </button>

            </div>

        </form>

    );

}

export default ConfigForm;