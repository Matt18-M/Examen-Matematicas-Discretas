import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CourseForm from "../components/CourseForm";
import CourseTable from "../components/CourseTable";

import api from "../services/api";

import "../styles/courses.css";

function Courses() {

    const [courses, setCourses] = useState([]);
    const [courseEdit, setCourseEdit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const manejarError = (error) => {

        console.error(error);

        setError("Ocurrió un error al comunicarse con el servidor.");

    };

    const obtenerMaterias = async () => {

        try {

            setLoading(true);

            setError("");

            const { data } = await api.get("/courses");

            setCourses(data);

        }

        catch (error) {

            manejarError(error);

        }

        finally {

            setLoading(false);

        }

    };

    const guardarMateria = async (course) => {

        try {

            await api.post("/courses", course);

            await obtenerMaterias();

        }

        catch (error) {

            manejarError(error);

        }

    };

    const actualizarMateria = async (course) => {

        if (!courseEdit) return;

        try {

            await api.put(`/courses/${courseEdit.id}`, course);

            setCourseEdit(null);

            await obtenerMaterias();

        }

        catch (error) {

            manejarError(error);

        }

    };

    const eliminarMateria = async (id) => {

        try {

            await api.delete(`/courses/${id}`);

            if (courseEdit?.id === id) {

                setCourseEdit(null);

            }

            await obtenerMaterias();

        }

        catch (error) {

            manejarError(error);

        }

    };

    useEffect(() => {

        obtenerMaterias();

    }, []);

    if (loading) {

        return (

            <>

                <Navbar />

                <main className="courses-page">

                    <section className="courses-loading">

                        <div className="loading-spinner"></div>

                        <h3>

                            Cargando materias...

                        </h3>

                    </section>

                </main>

            </>

        );

    }

    const totalCreditos = courses.reduce(

        (t, c) => t + c.credits,

        0

    );

    const totalAlta = courses.filter(

        c => c.difficulty === "Alta"

    ).length;

    return (

        <>

            <Navbar />

            <main className="courses-page">

                <section className="courses-hero">

                    <span className="courses-badge">

                        Gestión Académica

                    </span>

                    <h1>

                        Administración de Materias

                    </h1>

                    <p>

                        Registre, edite y administre todas las materias que
                        utilizará el algoritmo para generar horarios
                        automáticamente.

                    </p>

                </section>

                {

                    error && (

                        <div className="courses-error">

                            {error}

                        </div>

                    )

                }

                <section className="courses-stats">

                    <div className="courses-stat">

                        <div className="courses-stat-number">

                            {courses.length}

                        </div>

                        <div className="courses-stat-title">

                            Materias Registradas

                        </div>

                    </div>

                    <div className="courses-stat">

                        <div className="courses-stat-number">

                            {totalAlta}

                        </div>

                        <div className="courses-stat-title">

                            Dificultad Alta

                        </div>

                    </div>

                    <div className="courses-stat">

                        <div className="courses-stat-number">

                            {totalCreditos}

                        </div>

                        <div className="courses-stat-title">

                            Créditos Totales

                        </div>

                    </div>

                </section>

                <section className="courses-form-section">

                    <CourseForm

                        onGuardar={guardarMateria}

                        onActualizar={actualizarMateria}

                        courseEdit={courseEdit}

                    />

                </section>

                <section className="courses-table-section">

                    <CourseTable

                        courses={courses}

                        onEditar={setCourseEdit}

                        onEliminar={eliminarMateria}

                    />

                </section>

            </main>

        </>

    );

}

export default Courses;