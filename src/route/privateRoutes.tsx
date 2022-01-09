import { Navigate } from "react-router-dom";

import { login } from "../constants/paths";

const ProtectedRoute = ({isAuth, element}: any) => {    
    
    if (isAuth) {        
        return element;
    }
    return <Navigate to= {login} />;
}

export default ProtectedRoute;

