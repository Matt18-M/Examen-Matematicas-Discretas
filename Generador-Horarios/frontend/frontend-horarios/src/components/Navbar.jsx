import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

    const getNavClass = ({ isActive }) =>
        isActive ? "active" : "";

    return (

        <nav className="navbar">

            <div className="navbar-container">

                <div className="logo">

                    Generador de Horarios

                </div>

                <div className="menu">

                    <NavLink
                        to="/"
                        className={getNavClass}
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/courses"
                        className={getNavClass}
                    >
                        Materias
                    </NavLink>

                    <NavLink
                        to="/generator"
                        className={getNavClass}
                    >
                        Generar
                    </NavLink>

                    <NavLink
                        to="/horarios"
                        className={getNavClass}
                    >
                        Historial
                    </NavLink>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;