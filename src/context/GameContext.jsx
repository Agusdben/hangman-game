import { createContext, useReducer } from 'react'
import {
  gameStateReducer,
  GAME_STATE_INITIAL_VALUE
} from '../reducers/gameStateReducer'

export const GameContext = createContext({})

const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    gameStateReducer,
    GAME_STATE_INITIAL_VALUE
  )

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider
