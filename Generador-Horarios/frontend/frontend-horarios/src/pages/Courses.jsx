import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import CourseForm from "../components/CourseForm";
import CourseTable from "../components/CourseTable";

import api from "../services/api";

import "../styles/courses.css";

function Courses(){

    const [courses,setCourses]=useState([]);

    const obtenerMaterias=async()=>{

        try{

            const respuesta=await api.get("/courses");

            setCourses(respuesta.data);

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

                    <h1>

                        Administración de Materias

                    </h1>

                    <p>

                        Registra, edita y elimina las materias.

                    </p>

                </div>

                <div className="stats">

                    <div className="stat-card">

                        <h2>{courses.length}</h2>

                        <p>Materias</p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {courses.filter(course=>course.difficulty==="Alta").length}

                        </h2>

                        <p>Dificultad Alta</p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {courses.reduce((total,course)=>total+course.credits,0)}

                        </h2>

                        <p>Total Créditos</p>

                    </div>

                </div>

                <div className="courses-grid">

                    <div className="card">

                        <CourseForm/>

                    </div>

                    <div className="card">

                        <CourseTable
                            courses={courses}
                        />

                    </div>

                </div>

            </div>

        </>

    );

}

export default Courses;