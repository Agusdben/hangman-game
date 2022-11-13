import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  const saveLanguage = lang => {
    setLanguage(lang)
    window.localStorage.setItem('lang', lang)
  }

  return {
    language,
    saveLanguage
  }
}

export default useLanguage
