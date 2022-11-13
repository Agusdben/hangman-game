export const GAME_STATE_INITIAL_VALUE = {
  isPlaying: false,
  wordToGuess: null,
  lettersClicked: [],
  playWithClues:
    JSON.parse(window.localStorage.getItem('PlayWithClues')) || false,
  fails: 0,
  maxFails: 6
}

export const GAME_STATE_ACTIONS = {
  RESET: 'RESET',
  ADD_LETTER_CLICKED: 'ADD_LETTER_CLICKED',
  NEW_GUESS_WORD: 'NEW_GUESS_WORD',
  PLUS_FAIL: 'PLUS_FAIL',
  CHANGE_PLAY_WITH_CLUES: 'CHANGE_PLAY_WITH_CLUES'
}

export const gameStateReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case GAME_STATE_ACTIONS.RESET:
      return {
        ...payload
      }

    case GAME_STATE_ACTIONS.ADD_LETTER_CLICKED:
      return {
        ...state,
        lettersClicked: state.lettersClicked.concat(payload.toLowerCase())
      }

    case GAME_STATE_ACTIONS.NEW_GUESS_WORD:
      return {
        ...state,
        isPlaying: true,
        lettersClicked: [],
        wordToGuess: payload
      }
    case GAME_STATE_ACTIONS.PLUS_FAIL:
      return {
        ...state,
        fails: payload + 1
      }

    case GAME_STATE_ACTIONS.CHANGE_PLAY_WITH_CLUES:
      return {
        ...state,
        playWithClues: payload
      }

    default:
      return {
        ...state
      }
  }
}
