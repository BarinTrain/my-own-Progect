import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isAuth, element}: any) => {    
    
    if (isAuth) {        
        return element
    }
    return <Navigate to= '/login' />;
}

export default ProtectedRoute;

