import { useMemo } from "react";

import { LOCALES } from "../../intl/locales";
import { Language } from "../../constants/intrefase";
import logo from '../../ascets/png/logo.png'
import { Link } from "react-router-dom";

import './index.style.scss'

interface Props {
    localeLanguage: Language;
    setLocale: React.Dispatch<React.SetStateAction<Language>>;
}

const uuid = require("react-uuid");

const Header = ({ setLocale, localeLanguage }: Props) => {
    const itemsMap = (item: string) => {
        return (
            <option key={uuid()}
                value={item}>
                {item}
            </option>
        )
    }

    const mappedItems = useMemo(() => Object.keys(LOCALES).map(itemsMap), [LOCALES]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const local: Record<string, string> = {
            value: LOCALES[event.target.value],
            name: event.target.value
        }
        const item = JSON.stringify(local);
        localStorage.setItem('internationalization', item);
        setLocale(local)
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container logo">
                    <Link to='/user'>
                        <img src={logo}
                            alt="#"
                            width='70px'
                            height='70px'
                        />
                    </Link>
                </div>
                <div className="header__container-bar">

                </div>
                <select onChange={handleChange}
                    className="select"
                >
                    <option hidden>
                        {localeLanguage.hasOwnProperty("name") ?
                            localeLanguage.name
                            : 'ENGLISH'}
                    </option>
                    {mappedItems}
                </select>
            </div>
        </header>
    )
}

export default Header;
