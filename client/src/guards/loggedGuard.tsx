import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/authUtil";

export default function LoggedGuard() {
    const isAuthenticated = getUser()
    return (
        isAuthenticated ? <Navigate to={"/"} /> : <Outlet/>
    );
}

