import { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { Link, useLocation } from "react-router-dom";

import { LOCALES } from "../../intl/locales";
import { Language } from "../../constants/intrefase";
import logo from '../../ascets/png/logo.png'
import { login, user } from "../../constants/paths";
import SideBar from '../SideBar';

import './index.style.scss'

interface Props {
    localeLanguage: Language;
    setLocale: React.Dispatch<React.SetStateAction<Language>>;
}

const Header = ({ setLocale, localeLanguage }: Props) => {
    const [isActive, setIsAcive] = useState<string>();
    const { pathname } = useLocation();

    useEffect( () => {
        setIsAcive(pathname)
    }, [pathname]);
    
    const itemsMap = (item: string) => {
        return (
            <option key={uuid()}
                value={item}>
                {item}
            </option>
        )
    };

    const mapItems = useMemo(() => Object.keys(LOCALES).map(itemsMap), [LOCALES]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const local: Record<string, string> = {
            value: LOCALES[event.target.value],
            name: event.target.value
        };
        const item = JSON.stringify(local);
        localStorage.setItem('internationalization', item);
        setLocale(local);
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container logo">
                    <Link to={user}>
                        <img src={logo}
                            alt="#"
                            width='70px'
                            height='70px'
                        />
                    </Link>
                </div>
                <div className="header__container options">
                    <div className={isActive === login ? 
                        'header__container disable' 
                        : 'header__container active'}>
                        <SideBar />
                    </div>
                    <select onChange={handleChange}
                        className="select"
                    >
                        <option hidden>
                            {localeLanguage.hasOwnProperty("name") ?
                                localeLanguage.name
                                : 'ENGLISH'}
                        </option>
                        {mapItems}
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header;
