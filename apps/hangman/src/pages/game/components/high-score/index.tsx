import React from 'react'
import {
  StyledHighScoreContainer,
  StyledHighScoreHeader,
  StyledHighScoreList,
  StyledHighScoreItem,
  StyledHighScoreNumber,
  StyledHighScoreUsername,
} from './styles'
import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import { useSelector } from '@packages/sdk'

export default function HighScore(): JSX.Element {
  const highscores = useSelector(gameSelectors.highscores)

  return (
    <StyledHighScoreContainer>
      <StyledHighScoreHeader>High Scores</StyledHighScoreHeader>
      <StyledHighScoreList>
        {highscores.map(({ score, username }, i) => {
          const key = `score-${score}-${username}-${i}`

          return (
            <StyledHighScoreItem key={key}>
              <StyledHighScoreNumber>{score}</StyledHighScoreNumber>
              <StyledHighScoreUsername>{username}</StyledHighScoreUsername>
            </StyledHighScoreItem>
          )
        })}
      </StyledHighScoreList>
    </StyledHighScoreContainer>
  )
}
