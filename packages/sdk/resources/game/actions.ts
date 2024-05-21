import * as types from './types'
import { GameData } from '.'

export const getHighScores = () => (dispatch): void =>
  dispatch({
    type: types.UPDATE,
    payload: {},
  })

function generateNewGameData(): Partial<GameData> {
  const words = ['avanti', 'battleship', 'chicken', 'doodle', 'egor', 'fortune']
  const index = 0
  const word = words[index]
  const hearts = [1, 1, 1, 1, 1, 1, 1] // Get seven wrong guesses

  return { hearts, word, wordLength: word.length }
}

export const getNewGame = () => (dispatch): void =>
  dispatch({
    type: types.NEW,
    payload: generateNewGameData(),
  })

export const makeGuess = (char: string) => (dispatch): void =>
  dispatch({
    type: types.GUESS,
    payload: { charGuessed: char },
  })

export const setHighScore = () => (dispatch): void =>
  dispatch({
    type: types.SET_HIGH_SCORE,
    payload: {},
  })
