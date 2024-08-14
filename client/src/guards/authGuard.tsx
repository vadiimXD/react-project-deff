import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/authUtil";

export default function AuthGuard() {
    const isAuthenticated = getUser()
    return (
        isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />
    );
}
