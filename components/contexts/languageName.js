import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [languageName, setLanguageName] = useState('en');

  useEffect(() => {
    const lang = localStorage.getItem('language');
    setLanguageName(lang === 'kr' ? 'kr' : 'en');
  }, [])

  const toggleLanguage = () => {
    const name = languageName === 'en' ? 'kr' : 'en';
    localStorage.setItem('language', name);
    setLanguageName(name);
  }

  return (
    <LanguageContext.Provider value={[{ languageName, toggleLanguage }]}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LanguageProvider, LanguageContext }
