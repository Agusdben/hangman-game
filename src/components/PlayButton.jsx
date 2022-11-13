import useLanguage from '../hooks/useLanguage'
import PLAYBUTTON_LANG from '../language/playButtonLang'
import useGame from '../hooks/useGame'
import Button from './Button'

const PlayButton = () => {
  const { newGame } = useGame()
  const { language } = useLanguage()

  return (
    <Button type='button' onClick={newGame}>
      {PLAYBUTTON_LANG.play[language]}
    </Button>
  )
}

export default PlayButton
