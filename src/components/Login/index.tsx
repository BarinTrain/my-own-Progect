import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { Button } from "../common/Button";

import './index.style.scss'

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<Props> = ({ setIsAuth }) => {
    const history = useNavigate()
    const handleLogin = () => {
        setIsAuth(true)
        history('/user')
    }
    
    return (
        <div className="login">
            <div className="login__container">
                <Button 
                    onClick={() => handleLogin()}
                    className="login__container__button"
                    btnText={<FormattedMessage id='Log in' />}
                />            
            <p><FormattedMessage id='Are you autorithated?'/></p>
            </div>
        </div>
    )
}

export default Login;
