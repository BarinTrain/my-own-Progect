import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Data } from "../../constants/intrefase";
import { login, user, userInformation } from "../../constants/paths";
import { sendUser } from "../../redux/selectors";
import { Button } from "../common/Button/index";

import './index.style.scss';

const SideBar = () => {
    const [isWarning, setWarning] = useState(false);; 
    const intl = useIntl();
    const userInfo = useSelector(sendUser);
    const { pathname } = useLocation();
    const [isActive, setActive] = useState<string>();
    let history = useNavigate();

    const handleClick = () => {
        if ((userInfo as Data[]).length === 0) {
            setWarning(!isWarning)
        } else {
            history(userInformation);
        }
    };
    
    const isWarningOpen = isWarning === true && (userInfo as Data[]).length === 0 
        ? <div className="warning__text">
            {intl.formatMessage({ id: 'Please click on user card' })}
        </div> 
        : ''
    ;

    useEffect( () => {
        setActive(pathname)
    }, [pathname]); 

    return (
        <div className="sideBar__container">
            <div className="sideBar__container routes">
                <Button
                    onClick={handleClick}
                    className={isActive === userInformation ? 'routeButton infoActive' : 'routeButton'}
                    btnText={<FormattedMessage id='User Info' />}
                />
                <Link to={user} className='navigation' >
                    <Button
                        className={isActive === user ? 'routeButton userActive' : 'routeButton'}
                        btnText={<FormattedMessage id='User' />}
                    />
                </Link>
                <Link to={login} className='navigation'>
                    <Button
                        className="routeButton"
                        btnText={<FormattedMessage id='Log out' />}
                    />
                </Link>
            </div>
            <div className="warning">
                {isWarningOpen}
            </div>
        </div>
    )
}

export default SideBar;
