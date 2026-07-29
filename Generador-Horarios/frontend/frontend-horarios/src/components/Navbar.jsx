import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

function Navbar(){

    return(

        <nav className="navbar">

            <div className="navbar-container">

                <div className="logo">

                    📅 Generador de Horarios

                </div>

                <div className="menu">

                    <NavLink to="/">Inicio</NavLink>

                    <NavLink to="/courses">Materias</NavLink>

                    <NavLink to="/generator">Generador</NavLink>

                    <NavLink to="/results">Resultados</NavLink>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;