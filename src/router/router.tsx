import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Password from "../pages/Login/password/Password";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/login",
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "password",
                element: <Password />
            }
        ]
    }
])

export default router