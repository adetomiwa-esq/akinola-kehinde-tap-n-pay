import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react"
import LazyLoader from "../components/LazyLoader";
const Home = lazy(() => import("../pages/Home/Home"))
const ProfileSettings = lazy(() => import("../pages/ProfileSettings/ProfileSettings"))
const Login = lazy(() => import("../pages/Login/Login"))
const Password = lazy(() => import("../pages/Login/password/Password"))
const Otp = lazy(() => import("../pages/Login/otp/Otp"))
const Register = lazy(() => import("../pages/Register/Register"))
// import History from "../pages/History/History";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<LazyLoader />}>
                <Home />
            </Suspense>
        )
    },

    {
        path: "/profile-settings",
        element: (
            <Suspense fallback={<LazyLoader />}>
                <ProfileSettings />
            </Suspense>
        )
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
                element: (
                    <Suspense fallback={<LazyLoader />}>
                        <Login />
                    </Suspense>
                )
            },
            {
                path: "password",
                element: (
                    <Suspense fallback={<LazyLoader />}>
                        <Password />
                    </Suspense>
                )
            },
            {
                path: "otp",
                element: (
                <Suspense fallback={<LazyLoader />}>
                    <Otp />
                </Suspense>
            )
            }
        ]
    },

    {
        path: "/register",
        element: (
            <Suspense fallback={<LazyLoader />}>
                <Register />
            </Suspense>
        )
    }
])

export default router