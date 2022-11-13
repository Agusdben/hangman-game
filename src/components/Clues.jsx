import React, { useCallback, useMemo, useState } from 'react'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import useModal from '../hooks/useModal'
import CLUES_LANG from '../language/cluesLang'
import Button from './Button'
import ModalClue from './ModalClue'

const Clues = () => {
  const { wordToGuess, playWithClues, isPlaying } = useGame()
  const { language } = useLanguage()
  const { open, title, handleModal } = useModal({
    title: CLUES_LANG.clue[language]
  })

  const clues = useMemo(() => {
    return wordToGuess.clues[language]
  }, [isPlaying])

  const [clue, setClue] = useState(null)

  const handleClue = useCallback(() => {
    setClue(clues.shift() || CLUES_LANG.no_more_clues[language])
    handleModal()
  }, [wordToGuess.word[language]])

  if (playWithClues) {
    return (
      <div className='absolute top-0 right-0'>
        <Button type='button' onClick={handleClue}>
          {CLUES_LANG.clue[language]}
        </Button>
        <ModalClue
          open={open}
          title={title}
          handleModal={handleModal}
          clue={clue}
        />
      </div>
    )
  }
}

export default Clues
