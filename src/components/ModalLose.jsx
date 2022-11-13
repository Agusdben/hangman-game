import React, { useEffect } from 'react'
import modalLoseLang from '../language/modalLoseLang'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import useModal from '../hooks/useModal'
import Modal from './Modal'

const ModalLose = () => {
  const { language } = useLanguage()
  const { fails, maxFails, wordToGuess, resetGame } = useGame()
  const { open, title, handleModal } = useModal({
    title: modalLoseLang.you_die[language]
  })

  useEffect(() => {
    fails === maxFails && handleModal()
  }, [fails])

  const handleFinishGame = () => {
    resetGame()
    handleModal()
  }

  return (
    <Modal open={open} title={title} onClose={handleFinishGame}>
      <div className='flex ga-6 items-center flex-col'>
        <p>{modalLoseLang.the_word_is[language]}</p>
        <p className='text-2xl uppercase text-center text-red-800 font-bold'>
          {wordToGuess?.word[language]}
        </p>
      </div>
    </Modal>
  )
}

export default ModalLose
