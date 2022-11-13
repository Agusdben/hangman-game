import React, { useEffect, useState } from 'react'
import { KEYBOARDS } from '../constants/keyboards'
import useLanguage from '../hooks/useLanguage'
import KeyboardRow from './KeyboardRow'
import Legend from './Legend'

const Keyboard = () => {
  const { language } = useLanguage()
  const [keyboard, setKeyboard] = useState(KEYBOARDS[language])

  useEffect(() => {
    setKeyboard(KEYBOARDS[language])
  }, [language])

  return (
    <div className='flex gap-2 flex-col justify-center text-xs md:text-xl xl:p-12'>
      <Legend />
      <div className='flex flex-col gap-4 items-center'>
        {keyboard.map(row => (
          <KeyboardRow key={row} row={row} />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
