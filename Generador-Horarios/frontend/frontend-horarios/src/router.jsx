import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Generator from "./pages/Generator";
import Results from "./pages/Results";
import HorariosGenerados from "./pages/HorariosGenerados";
import HorarioDetalle from "./pages/HorarioDetalle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/courses",
        element: <Courses />
    },
    {
        path: "/generator",
        element: <Generator />
    },
    {
        path: "/results",
        element: <Results />
    },
    {
        path: "/horarios",
        element: <HorariosGenerados />
    },
    {
        path: "/horarios/:id",
        element: <HorarioDetalle />
    }
]);

export default router;