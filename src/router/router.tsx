import { createBrowserRouter } from "react-router-dom";

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
                element: <h1>Login</h1>
            }
        ]
    }
])

export default router