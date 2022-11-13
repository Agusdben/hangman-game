import React from 'react'
import useGame from '../hooks/useGame'
import useLanguage from '../hooks/useLanguage'
import WORDTOGUESS_LANG from '../language/wordToGuessLang'
import { normalizeString } from '../utiles'
import RemainingFails from './RemainingFails'

const WordToGuess = () => {
  const { wordToGuess, isPlaying, lettersClicked } = useGame()
  const { language } = useLanguage()
  const word = wordToGuess?.word[language].split('')

  if (isPlaying) {
    return (
      <div className='flex flex-col items-center gap-2 p-4 '>
        <div className='flex items-center justify-center gap-4'>
          {word.map((letter, index) => (
            <span
              className='w-6 xl:w-12 xl:text-4xl xl:font-bold aspect-square text-center border-b-2 border-slate-800 text-slate-800'
              key={`letter-${letter}-${index}`}
            >
              {lettersClicked.includes(normalizeString(letter))
                ? letter.toUpperCase()
                : ''}
            </span>
          ))}
        </div>
        <p>
          ({word.length}) {WORDTOGUESS_LANG.letters[language]}
        </p>
        <RemainingFails />
      </div>
    )
  }
}

export default WordToGuess
