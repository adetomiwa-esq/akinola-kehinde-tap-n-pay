import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Password from "../pages/Login/password/Password";
import Home from "../pages/Home/Home";
import ProfileSettings from "../pages/ProfileSettings/ProfileSettings";
// import History from "../pages/History/History";
// import Register from "../pages/Register/Register";
import Otp from "../pages/Login/otp/Otp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/profile-settings",
        element: <ProfileSettings />
    },

    // {
    //     path: "/history",
    //     element: <History />
    // },

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
            },
            {
                path: "otp",
                element: <Otp />
            }
        ]
    },

    // {
    //     path: "/register",
    //     element: <Register />
    // }
])

export default router