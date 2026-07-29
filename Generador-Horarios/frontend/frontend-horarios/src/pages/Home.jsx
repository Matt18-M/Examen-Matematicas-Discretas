import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Home(){

    return(

        <>

            <Navbar/>

            <div className="container">

                <div
                    style={{
                        textAlign:"center",
                        marginTop:"90px"
                    }}
                >

                    <h1 style={{fontSize:"48px"}}>

                        Generador Inteligente

                    </h1>

                    <h2
                        style={{
                            color:"#64748b",
                            marginTop:"10px"
                        }}
                    >

                        Horarios Académicos

                    </h2>

                    <p
                        style={{
                            marginTop:"25px",
                            fontSize:"18px"
                        }}
                    >

                        Sistema basado en Matemáticas Discretas

                    </p>

                    <div
                        style={{
                            marginTop:"50px",
                            display:"flex",
                            justifyContent:"center",
                            gap:"20px"
                        }}
                    >

                        <Link to="/courses">

                            <button
                                style={{
                                    padding:"15px 30px",
                                    background:"#2563eb",
                                    color:"white",
                                    borderRadius:"10px"
                                }}
                            >

                                Administrar Materias

                            </button>

                        </Link>

                        <Link to="/generator">

                            <button
                                style={{
                                    padding:"15px 30px",
                                    background:"#16a34a",
                                    color:"white",
                                    borderRadius:"10px"
                                }}
                            >

                                Generar Horarios

                            </button>

                        </Link>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Home;