import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
  const isAuthenticated = Boolean(sessionStorage.getItem("user"))

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
