import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import Header from './components/Header';
import Login from './components/Login';
import { LOCALES } from './intl/locales';
import { messeges } from './intl/messendes';
import { Language } from './constants/intrefase';
import User from './components/User';
import UserInfo from './components/UserInfo';
import { Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './route/privateRoutes';

import './App.scss';

const App: React.FC = () => {
  const storedLanguage: Language = JSON.parse(localStorage.getItem('internationalization')!)
  const defaultLanguage: Language = {
    value: LOCALES.ENGLISH
  }
  const language: Language = storedLanguage || defaultLanguage;
  const [localeLanguage, setLocaleLanguage] = useState<Language>(language);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <IntlProvider
      messages={messeges[localeLanguage.value]}
      locale={localeLanguage.value}
      >
        <Header setLocale={setLocaleLanguage} localeLanguage={localeLanguage}/>
        <Routes >
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
          <Route path='/user' element={<ProtectedRoute isAuth={isAuth} element={<User />} />} />
          <Route path='/user_info' element={<ProtectedRoute isAuth={isAuth} element={<UserInfo />} />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;