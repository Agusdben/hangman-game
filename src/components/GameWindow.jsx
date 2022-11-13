import React from 'react'
import useGame from '../hooks/useGame'
import Clues from './Clues'
import Gallows from './Gallows'
import WordToGuess from './WordToGuess'

const GameWindow = () => {
  const { isPlaying } = useGame()
  if (isPlaying) {
    return (
      <div className='relative flex flex-col min-w-[300px] lg:min-w-[400px]'>
        <Gallows />
        <WordToGuess />
        <Clues />
      </div>
    )
  }
}

export default GameWindow
