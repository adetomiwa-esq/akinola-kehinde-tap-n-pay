import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react"
import LazyLoader from "../components/LazyLoader";
import MainLayout from "../layouts/MainLayout";
const Home = lazy(() => import("../pages/Home/Home"))
const ProfileSettings = lazy(() => import("../pages/ProfileSettings/ProfileSettings"))
const Login = lazy(() => import("../pages/Login/Login"))
const Password = lazy(() => import("../pages/Login/password/Password"))
const Otp = lazy(() => import("../pages/Login/otp/Otp"))
const Register = lazy(() => import("../pages/Register/Register"))
const History = lazy(() => import("../pages/History/History"))


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<LazyLoader />}>
                        <Home />
                    </Suspense>
                )
            },


            {
                path: "history",
                element: (
                    <Suspense fallback={<LazyLoader />}>
                        <History />
                    </Suspense>
                )
            },
        ]
    },

    {
                path: "profile-settings",
                element: (
                    <Suspense fallback={<LazyLoader />}>
                        <ProfileSettings />
                    </Suspense>
                )
            },


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