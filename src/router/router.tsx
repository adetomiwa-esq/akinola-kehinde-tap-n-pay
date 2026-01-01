import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Password from "../pages/Login/password/Password";
import Home from "../pages/Home/Home";
import ProfileSettings from "../pages/ProfileSettings/ProfileSettings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/profile-settings",
        element: <ProfileSettings />
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