import { useState } from "react";

function ConfigForm({ courses,onGenerar }){

    const [selectedCourses,setSelectedCourses]=useState([]);
    const [maxCredits,setMaxCredits]=useState(30);
    const [modality,setModality]=useState("Todas");
    const [freeDays,setFreeDays]=useState([]);

    const dias=["Lunes","Martes","Miércoles","Jueves","Viernes"];

    const seleccionarMateria=(id)=>{

        if(selectedCourses.includes(id)){

            setSelectedCourses(selectedCourses.filter(course=>course!==id));

        }

        else{

            setSelectedCourses([...selectedCourses,id]);

        }

    };

    const seleccionarDia=(dia)=>{

        if(freeDays.includes(dia)){

            setFreeDays(freeDays.filter(item=>item!==dia));

        }

        else{

            setFreeDays([...freeDays,dia]);

        }

    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        onGenerar({

            selectedCourses,
            maxCredits:Number(maxCredits),
            modality,
            freeDays

        });

    };

    return(

        <div className="card">

            <h2>Configuración del Horario</h2>

            <form onSubmit={handleSubmit}>

                <h3>Seleccione las materias</h3>

                <div className="checkbox-group">

                    {

                        courses.map(course=>(

                            <label key={course.id}>

                                <input
                                    type="checkbox"
                                    checked={selectedCourses.includes(course.id)}
                                    onChange={()=>seleccionarMateria(course.id)}
                                />

                                {course.name} ({course.credits} créditos)

                            </label>

                        ))

                    }

                </div>

                <h3>Modalidad</h3>

                <select
                    value={modality}
                    onChange={(e)=>setModality(e.target.value)}
                >

                    <option>Todas</option>
                    <option>Presencial</option>
                    <option>Virtual</option>

                </select>

                <h3>Máximo de créditos</h3>

                <input
                    type="number"
                    min="1"
                    max="40"
                    value={maxCredits}
                    onChange={(e)=>setMaxCredits(e.target.value)}
                />

                <h3>Días libres</h3>

                <div className="checkbox-group">

                    {

                        dias.map(dia=>(

                            <label key={dia}>

                                <input
                                    type="checkbox"
                                    checked={freeDays.includes(dia)}
                                    onChange={()=>seleccionarDia(dia)}
                                />

                                {dia}

                            </label>

                        ))

                    }

                </div>

                <button
                    className="btn btn-primary"
                    type="submit"
                >

                    Generar Horarios

                </button>

            </form>

        </div>

    );

}

export default ConfigForm;