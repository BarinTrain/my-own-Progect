import { LOCALES } from './locales'

interface Props {
    [x: string]: Record<string, string>
}

export const messeges: Props = {
    [LOCALES.ENGLISH]: {
        "Are you autorithated?": "Are you autorithated?",
        "Date of birth:": "Date of birth:",
        "Age:": "Age:",
        "Gender:": "Gender:",
        "City:": "City:",
        "in": "in",
        "Street:": "Street:",
        "Phone number:": "Phone number:",
        "Date of registration:": "Date of registration:",
        "at": "at",
        "oclock": "o'clock",
        "Please click on user card": "Please click on user card",
        "Details": "Details",
        "User Info": "User Info",
        "User": "User",
        "Log out": "Log out",
        "Log in": "Log in",
    },
    [LOCALES.RUSSIAN]: {
        "Are you autorithated?": "Вы авторизованы?",
        "Date of birth:": "Дата рождения:",
        "Age:": "Возраст:",
        "Gender:": "Пол:",
        "City:": "Город:",
        "in": "в",
        "Street:": "Улица:",
        "Phone number:": "Номер телефона:",
        "Date of registration:": "Дата регистрации:",
        "at": "в",
        "oclock": " ",
        "Please click on user card": "Пожалуйст нажмите на пользователя",
        "Details": "Подробнее",
        "User Info": "Информация",
        "Log out": "Выход",
        "User": "Пользователь",
        "Log in": "Войти"
    }
}