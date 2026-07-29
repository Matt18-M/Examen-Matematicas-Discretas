import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CourseForm from "../components/CourseForm";
import CourseTable from "../components/CourseTable";

import api from "../services/api";

import "../styles/courses.css";

function Courses(){

    const [courses,setCourses]=useState([]);
    const [courseEdit,setCourseEdit]=useState(null);

    const obtenerMaterias=async()=>{

        try{

            const respuesta=await api.get("/courses");

            setCourses(respuesta.data);

        }

        catch(error){

            console.error(error);

        }

    };

    const guardarMateria=async(datos)=>{

        try{

            await api.post("/courses",{

                ...datos,

                credits:Number(datos.credits),

                prerequisites:datos.prerequisites
                    .split(",")
                    .map(item=>item.trim())
                    .filter(item=>item!=="")

            });

            await obtenerMaterias();

        }

        catch(error){

            console.error(error);

        }

    };

    const actualizarMateria=async(datos)=>{

        try{

            await api.put(`/courses/${courseEdit.id}`,{

                ...datos,

                credits:Number(datos.credits),

                prerequisites:datos.prerequisites
                    .split(",")
                    .map(item=>item.trim())
                    .filter(item=>item!=="")

            });

            setCourseEdit(null);

            await obtenerMaterias();

        }

        catch(error){

            console.error(error);

        }

    };

    const eliminarMateria=async(id)=>{

        try{

            const confirmar=window.confirm("¿Desea eliminar esta materia?");

            if(!confirmar)return;

            await api.delete(`/courses/${id}`);

            if(courseEdit?.id===id){

                setCourseEdit(null);

            }

            await obtenerMaterias();

        }

        catch(error){

            console.error(error);

        }

    };

    useEffect(()=>{

        obtenerMaterias();

    },[]);

    return(

        <>

            <Navbar/>

            <div className="courses-container">

                <div className="page-header">

                    <h1>Administración de Materias</h1>

                    <p>Registra, edita y elimina las materias.</p>

                </div>

                <div className="stats">

                    <div className="stat-card">
                        <h2>{courses.length}</h2>
                        <p>Materias</p>
                    </div>

                    <div className="stat-card">
                        <h2>{courses.filter(course=>course.difficulty==="Alta").length}</h2>
                        <p>Dificultad Alta</p>
                    </div>

                    <div className="stat-card">
                        <h2>{courses.reduce((total,course)=>total+course.credits,0)}</h2>
                        <p>Total Créditos</p>
                    </div>

                </div>

                <div className="courses-grid">

                    <div className="card">

                        <CourseForm
                            onGuardar={guardarMateria}
                            onActualizar={actualizarMateria}
                            courseEdit={courseEdit}
                        />

                    </div>

                    <div className="card">

                        <CourseTable
                            courses={courses}
                            onEditar={setCourseEdit}
                            onEliminar={eliminarMateria}
                        />

                    </div>

                </div>

            </div>

        </>

    );

}

export default Courses;