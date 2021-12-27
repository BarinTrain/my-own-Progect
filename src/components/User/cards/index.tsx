import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

import { checkData, sendUser } from "../../../redux/actions/actions";
import { stateSelector } from "../../../redux/selectors";
import { Data } from "../../../constants/intrefase";
import { Button } from "../../common/Button";
import Loader from "../../Loader";

import './index.style.scss'

const uuid = require("react-uuid");

const Cards = () => {
    const [fetching, setFetching] = useState(true);
    const dispatch = useDispatch();

    const {
        receivedData, 
        isDataFetching, 
        isDataFetchError, 
        currentPage
    } = useSelector(stateSelector)

    const send = (item: Data) => dispatch(sendUser([item]))

    useEffect(() => {
        dispatch(checkData(currentPage + 1))
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (event: any) => {
        const pagination = event.target.documentElement.scrollHeight === (event.target.documentElement.scrollTop + window.innerHeight);
        if (pagination) {
            setFetching((prevState: boolean) => !prevState)
        }
    }

    const mapping = (item: Data) => {
        const year = item.dob.date;
        const date = year.slice(0, 10);
        const className = item.gender === 'male' ?
            'cards__block-user male'
            : 'cards__block-user female';

        return (
            <div key={uuid()}>
                <div className={className}>
                    <h3>{item.name.first} {item.name.last}</h3>
                    <div>
                        <img
                            src={item.picture.large}
                            className="images"
                            alt="#"
                        />
                    </div>
                    <div className="infoContent">
                        <p><FormattedMessage id='Date of birth:' /> {date}</p>
                        <p><FormattedMessage id='Age:' /> Age: {item.dob.age}</p>
                        <p><FormattedMessage id='Gender:' /> {item.gender}</p>
                    </div>
                    <Link to='/user_info' className="linka">
                        <Button
                            onClick={() => send(item)}
                            className="route"
                            btnText={<FormattedMessage id='Details' />}
                        />
                    </Link>
                </div>
            </div>
        )
    }

    const mapedCard = useMemo(() => (receivedData as Data[]).map(mapping), [receivedData]);

    const loader = !isDataFetching ?
        <div className="load">
            <Loader />
        </div>
        : (
            <>
                <div className="cards" onScroll={event => scrollHandler(event)}>
                    <div className="cards__block">
                        {mapedCard}
                    </div>
                </div>
            </>
        )

    return (
        isDataFetchError ?
            <div className="error">
                Error
            </div>
            : loader
    )
}

export default Cards;
