import useGame from '../hooks/useGame'

const KeyboardKey = ({ keyboardKey }) => {
  const { lettersClicked, tryLetter, isPlaying } = useGame()

  return (
    <button
      className='aspect-square uppercase bg-white grid place-content-center w-7 border-2 rounded-md disabled:opacity-30 disabled:bg-white disabled:text-black hover:bg-slate-800 hover:text-white transition-colors sm:w-10 md:w-12 sm:font-bold'
      type='button'
      disabled={lettersClicked.includes(keyboardKey)}
      onClick={isPlaying ? () => tryLetter(keyboardKey) : null}
    >
      {keyboardKey}
    </button>
  )
}

export default KeyboardKey
