import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

const ProtectedRoutes = () => {
    const {user} = useAuth();

    if(!user) return <Navigate to='/login' />
}

export default ProtectedRoutes