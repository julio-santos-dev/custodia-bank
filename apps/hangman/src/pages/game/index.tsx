import CharacterBoard from './components/character-board'
import * as gameActions from '@packages/sdk/resources/game/actions'
import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import HeartList from './components/heart-list'
import HighScore from './components/high-score'
import React from 'react'
import Score from './components/score'
import {
  StyledGameBackground,
  StyledGameWrapper,
  StyledNewGameButton,
} from './styles'
import { useDispatch, useSelector } from '@packages/sdk'

export default function pageGame(): JSX.Element {
  const dispatch = useDispatch()

  // Get game data on game start
  dispatch(gameActions.getNewGame())
  dispatch(gameActions.getHighScores())

  return (
    <StyledGameWrapper>
      <GameBackground />
      <Score />
      <HeartList />
      <CharacterBoard />
      <HighScore />
      <StyledNewGameButton
        onClick={(e) => {
          e && e.preventDefault()

          dispatch(gameActions.getNewGame())
        }}
        type="button"
      >
        New Game
      </StyledNewGameButton>
    </StyledGameWrapper>
  )
}

function GameBackground() {
  const status = useSelector(gameSelectors.status)

  return (
    <>
      <StyledGameBackground status={status}></StyledGameBackground>
    </>
  )
}
