import { useContext } from 'react'
import { WORDS } from '../constants/words'
import { GameContext } from '../context/GameContext'
import {
  GAME_STATE_ACTIONS,
  GAME_STATE_INITIAL_VALUE
} from '../reducers/gameStateReducer'
import { getRandomFromArr } from '../utiles'
import useLanguage from './useLanguage'

const useGame = () => {
  const {
    isPlaying,
    wordToGuess,
    lettersClicked,
    fails,
    maxFails,
    playWithClues,
    dispatch
  } = useContext(GameContext)

  const { language } = useLanguage()
  const tryLetter = letter => {
    if (
      !wordToGuess.word[language].toLowerCase().includes(letter.toLowerCase())
    ) {
      dispatch({ type: GAME_STATE_ACTIONS.PLUS_FAIL, payload: fails })
    }
    dispatch({ type: GAME_STATE_ACTIONS.ADD_LETTER_CLICKED, payload: letter })
  }

  const resetGame = () => {
    dispatch({
      type: GAME_STATE_ACTIONS.RESET,
      payload: GAME_STATE_INITIAL_VALUE
    })
  }

  const newGame = () => {
    const newGuessWord = getRandomFromArr(WORDS)
    dispatch({
      type: GAME_STATE_ACTIONS.NEW_GUESS_WORD,
      payload: newGuessWord
    })
  }

  const handlePlayWithClues = withClues => {
    dispatch({
      type: GAME_STATE_ACTIONS.CHANGE_PLAY_WITH_CLUES,
      payload: withClues
    })
    window.localStorage.setItem('PlayWithClues', JSON.stringify(withClues))
  }

  return {
    lettersClicked,
    wordToGuess,
    isPlaying,
    fails,
    maxFails,
    playWithClues,
    tryLetter,
    newGame,
    handlePlayWithClues,
    resetGame
  }
}

export default useGame
