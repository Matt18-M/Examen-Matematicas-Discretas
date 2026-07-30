import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScheduleList from "../components/ScheduleList";

function Results(){

    const [schedules,setSchedules]=useState([]);

    useEffect(()=>{

        const data=localStorage.getItem("generatedSchedules");

        if(data){

            setSchedules(JSON.parse(data));

        }

    },[]);

    return(

        <>

            <Navbar/>

            <div className="courses-container">

                <div className="page-header">

                    <h1>Horarios Generados</h1>

                    <p>Resultados del generador.</p>

                </div>

                {

                    schedules.length===0 ?

                    (

                        <div className="card">

                            <h2>No existen horarios generados.</h2>

                            <p>

                                Primero debe generar un horario.

                            </p>

                            <Link
                                className="btn btn-primary"
                                to="/generator"
                            >

                                Ir al Generador

                            </Link>

                        </div>

                    )

                    :

                    (

                        <ScheduleList
                            schedules={schedules}
                        />

                    )

                }

            </div>

        </>

    );

}

export default Results;