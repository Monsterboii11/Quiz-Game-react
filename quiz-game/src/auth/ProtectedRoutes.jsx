import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

const ProtectedRoutes = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    if(!user) return <Navigate to='/login' />
}

export default ProtectedRoutes