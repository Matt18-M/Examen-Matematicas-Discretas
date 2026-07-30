import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ConfigForm from "../components/ConfigForm";

import api from "../services/api";

function Generator(){

    const [courses,setCourses]=useState([]);

    const navigate=useNavigate();

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

    const generarHorarios=(config)=>{

    let materias=courses.filter(course=>
        config.selectedCourses.includes(course.id)
    );

    if(config.modality!=="Todas"){

        materias=materias.filter(course=>
            course.modality===config.modality
        );

    }

    let creditos=0;

    const horario=[];

    materias.forEach(course=>{

        if(config.freeDays.includes(course.day)) return;

        if(creditos+course.credits<=config.maxCredits){

            horario.push(course);

            creditos+=course.credits;

        }

    });

    const schedules=[horario];

    localStorage.setItem(
        "generatedSchedules",
        JSON.stringify(schedules)
    );

    navigate("/results");

};

    return(

        <>

            <Navbar/>

            <div className="courses-container">

                <div className="page-header">

                    <h1>Generador de Horarios</h1>

                    <p>

                        Configure sus preferencias y genere un horario automáticamente.

                    </p>

                </div>

                <ConfigForm
                    courses={courses}
                    onGenerar={generarHorarios}
                />

            </div>

        </>

    );

}

export default Generator;