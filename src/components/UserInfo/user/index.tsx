import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { Data } from "../../../constants/intrefase";
import { sendUser } from "../../../redux/selectors";

import './index.style.scss'

const uuid = require("react-uuid");


const Users = () => {

    const userInfo = useSelector(sendUser);

    const userDeteils = (item: Data) => {
        
        const year = item.dob.date;
        const date = year.slice(0,10);
        const registered = item.registered.date;
        const registeredDate = registered.slice(0,10);
        const className = item.gender === 'male' ?
            'user__information-user male'
            : 'user__information-user female';

        return (
            <div key={uuid()}>
                <div className={className}>
                    <div className="user__photo">
                        <h3>{item.name.first} {item.name.last}</h3>
                        <img 
                            src={item.picture.large}
                            className="images"
                            alt="#"
                        />
                    </div>
                    <div className="user__personal">
                        <p><FormattedMessage id='Date of birth:'/> {date}</p>
                        <p><FormattedMessage id='Age:'/> {item.dob.age}</p>
                        <p><FormattedMessage id='Gender:'/> {item.gender}</p>
                        <p><FormattedMessage id='City:'/> {item.location.city} in {item.location.country}</p>
                        <p><FormattedMessage id='Street:'/> {item.location.street.name}, {item.location.street.number}</p>
                        <p><FormattedMessage id='Phone number:'/> {item.phone}</p>
                        <p><FormattedMessage id='Date of registration:'/> {registeredDate} {' '}
                            <FormattedMessage id='at'/> {registered.slice(14,19)} {' '}
                            <FormattedMessage id="oclock"/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    const mapedUser = useMemo(() => (userInfo as Data[]).map(userDeteils), [userInfo])

    return (
        <div className="user">
            <div className="user__information">
                {mapedUser}
            </div>
        </div>
    )
}

export default Users;
