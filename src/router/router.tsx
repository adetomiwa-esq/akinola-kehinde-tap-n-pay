import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Password from "../pages/Login/password/Password";

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
            },
            {
                path: "password",
                element: <Password />
            }
        ]
    }
])

export default router