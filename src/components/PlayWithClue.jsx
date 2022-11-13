import React, { useState } from 'react'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import playWithClueLang from '../language/playWithClueLang'

const PlayWithClues = () => {
  const { handlePlayWithClues } = useGame()
  const { language } = useLanguage()
  const [checked, setChecked] = useState(
    JSON.parse(window.localStorage.getItem('PlayWithClues'))
  )

  const handleOnChange = () => {
    setChecked(!checked)
    handlePlayWithClues(!checked)
  }

  return (
    <label className='flex items-center gap-2 capitalize'>
      {playWithClueLang.clues[language]}:
      <input
        type='checkbox'
        checked={checked}
        onChange={handleOnChange}
        className='w-6 h-6 accent-slate-800'
      />
    </label>
  )
}

export default PlayWithClues
