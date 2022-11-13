import React from 'react'
import GALLOWS from '../constants/gallows'
import useGame from '../hooks/useGame'

const Gallows = () => {
  const { fails, isPlaying } = useGame()
  if (isPlaying) {
    return (
      <picture className='block w-60 h-60  xl:w-80 xl:h-80'>
        <img
          className='w-full h-full object-cover'
          src={GALLOWS[fails].img}
          alt={GALLOWS[fails].alt}
        />
      </picture>
    )
  }
}

export default Gallows
