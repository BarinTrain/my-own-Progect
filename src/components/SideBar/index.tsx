import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Data } from "../../constants/intrefase";
import { sendUser } from "../../redux/selectors";
import { Button } from "../common/Button/index";

import './index.style.scss'

const SideBar = () => {
    const [isWarning, setWarning] = useState(false);
    const [isActive, setActive] = useState(false);
    const [isInfoActive, setInfoActive] = useState(false);
    const [fetching, setFetching] = useState(true);
    const intl = useIntl();
    const userInfo = useSelector(sendUser);
    const location = useLocation()
    
    let history = useNavigate();

    const handleClick = () => {
        (userInfo as Data[]).length === 0 
        ? setWarning(!isWarning) 
        : history("/user_info");
    }
    
    const isWarningOpen = isWarning === true && (userInfo as Data[]).length === 0 ?
        <div className="warning__text">
            {intl.formatMessage({ id: 'Please click on user card' })}
        </div> 
        : ''
    ;

    useEffect( () => {
        if (location.pathname === '/user') {
            setActive(!isActive)
        } else if (location.pathname === '/user_info')
        setInfoActive(!isInfoActive)
    }, [fetching])

    return (
        <div className="sideBar__container">
            <div className="sideBar__container routes">
                    <Button
                        onClick={handleClick}
                        className={isInfoActive ? 'routeButton infoActive' : 'routeButton'}
                        btnText={<FormattedMessage id='User Info' />}
                    />
                <Link to='/user' className='navigation' >
                    <Button
                        className={isActive ? 'routeButton userActive' : 'routeButton'}
                        btnText={<FormattedMessage id='User' />}
                    />
                </Link>
                <Link to='/login' className='navigation'>
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
