import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import REMAININGFAILS_LANG from '../language/remainingFailsLang'

const RemainingFails = () => {
  const { fails, maxFails } = useGame()
  const { language } = useLanguage()

  return (
    <p className='m-0'>
      {REMAININGFAILS_LANG.remaining_fails[language]}:{' '}
      <span className='text-slate-800 font-bold'>{maxFails - fails}</span>
    </p>
  )
}

export default RemainingFails
