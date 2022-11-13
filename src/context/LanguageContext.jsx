import { createContext, useState } from 'react'
import { LANGUAGES } from '../language/languages'

export const LanguageContext = createContext('')

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem('lang') || LANGUAGES.en
  )
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
