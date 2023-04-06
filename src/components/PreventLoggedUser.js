import { useIsAuthenticated } from "react-auth-kit";
import { Outlet, Navigate } from "react-router-dom";

export function PreventLoggedUser() {
    const isAuthenticated = useIsAuthenticated();
    const isAuth = isAuthenticated();

    return isAuth ? <Navigate to='/' /> : <Outlet />
}