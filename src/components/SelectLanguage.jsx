import { LANGUAGES } from '../language/languages'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'

const SelectLanguage = () => {
  const { isPlaying } = useGame()
  const { language, saveLanguage } = useLanguage()
  const languages = Object.values(LANGUAGES)

  return (
    <select
      className='ml-auto border-2 text-xl p-2 border-black rounded-md cursor-pointer'
      disabled={isPlaying}
      name='languages'
      value={language}
      onChange={e => (isPlaying ? null : saveLanguage(e.target.value))}
    >
      {languages.map(lang => (
        <option key={lang} values={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}

export default SelectLanguage
