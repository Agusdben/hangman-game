import React from 'react'
import useGame from '../hooks/useGame'
import GameFilters from './GameFilters'
import PlayButton from './PlayButton'

const GameMenu = () => {
  const { isPlaying } = useGame()

  if (!isPlaying) {
    return (
      <div className='flex flex-col gap-4'>
        <GameFilters />
        <PlayButton />
      </div>
    )
  }
}

export default GameMenu
