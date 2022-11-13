import { useEffect } from 'react'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import useModal from '../hooks/useModal'
import MODALWIN_LANG from '../language/modalWinLang'
import { normalizeString } from '../utiles'
import Modal from './Modal'

const ModalWin = () => {
  const { language } = useLanguage()
  const { lettersClicked, fails, isPlaying, wordToGuess, resetGame } = useGame()
  const { title, handleModal, open } = useModal({
    title: MODALWIN_LANG.you_win[language]
  })

  const handleWin = () => {
    const word = new Set(normalizeString(wordToGuess?.word[language]))
    let toCompareWord = ''
    for (const letter of lettersClicked) {
      if (word.has(letter)) {
        toCompareWord += letter
      }
    }
    word.size === toCompareWord.length && handleModal()
  }

  useEffect(() => {
    if (isPlaying) {
      handleWin()
    }
  }, [lettersClicked.length])

  const handleFinishGame = () => {
    resetGame()
    handleModal()
  }

  return (
    <Modal title={title} onClose={handleFinishGame} open={open}>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl uppercase text-center text-green-700 font-bold'>
          {wordToGuess?.word[language]}
        </h2>
        <p>
          {MODALWIN_LANG.you_only_failed[language]}: {fails}
        </p>
      </div>
    </Modal>
  )
}

export default ModalWin
