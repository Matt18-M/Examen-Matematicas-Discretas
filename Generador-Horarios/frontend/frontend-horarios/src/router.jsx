import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Generator from "./pages/Generator";
import Results from "./pages/Results";

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
    }
]);

export default router;