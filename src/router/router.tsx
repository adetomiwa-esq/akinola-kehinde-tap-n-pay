import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Landing page</h1>
    },

    {
        path: "/login",
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    }
])

export default router