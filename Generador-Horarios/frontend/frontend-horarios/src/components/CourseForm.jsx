import { useEffect, useState } from "react";

function CourseForm({ onGuardar,onActualizar,courseEdit }){

    const estadoInicial={
        name:"",
        day:"Lunes",
        startTime:"",
        endTime:"",
        modality:"Presencial",
        difficulty:"Media",
        credits:"",
        prerequisites:""
    };

    const [formData,setFormData]=useState(estadoInicial);

    useEffect(()=>{

        if(courseEdit){

            setFormData({

                name:courseEdit.name,
                day:courseEdit.day,
                startTime:courseEdit.startTime,
                endTime:courseEdit.endTime,
                modality:courseEdit.modality,
                difficulty:courseEdit.difficulty,
                credits:courseEdit.credits,
                prerequisites:Array.isArray(courseEdit.prerequisites)
                    ? courseEdit.prerequisites.join(", ")
                    : ""

            });

        }

        else{

            setFormData(estadoInicial);

        }

    },[courseEdit]);

    const handleChange=(e)=>{

        const {name,value}=e.target;

        setFormData(prev=>({

            ...prev,

            [name]:value

        }));

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        if(courseEdit){

            await onActualizar(formData);

        }

        else{

            await onGuardar(formData);

        }

        setFormData(estadoInicial);

    };

    return(

        <>

            <h2>

                {courseEdit ? "Editar Materia" : "Nueva Materia"}

            </h2>

            <form className="course-form" onSubmit={handleSubmit}>

                <label>Nombre</label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label>Día</label>

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

                <label>Hora Inicio</label>

                <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                />

                <label>Hora Fin</label>

                <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                />

                <label>Modalidad</label>

                <select
                    name="modality"
                    value={formData.modality}
                    onChange={handleChange}
                >

                    <option>Presencial</option>
                    <option>Virtual</option>

                </select>

                <label>Dificultad</label>

                <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleChange}
                >

                    <option>Baja</option>
                    <option>Media</option>
                    <option>Alta</option>

                </select>

                <label>Créditos</label>

                <input
                    type="number"
                    name="credits"
                    value={formData.credits}
                    onChange={handleChange}
                    required
                />

                <label>Prerrequisitos</label>

                <input
                    type="text"
                    name="prerequisites"
                    value={formData.prerequisites}
                    onChange={handleChange}
                    placeholder="Separados por coma"
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                >

                    {courseEdit ? "Actualizar Materia" : "Guardar Materia"}

                </button>

            </form>

        </>

    );

}

export default CourseForm;