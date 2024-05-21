import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import React from 'react'
import { StyledScoreContainer, StyledScoreText } from './styles'
import { useSelector } from '@packages/sdk'

export default function Score(): JSX.Element {
  const score = useSelector(gameSelectors.score)

  return (
    <StyledScoreContainer>
      <StyledScoreText>Score: {score}</StyledScoreText>
    </StyledScoreContainer>
  )
}
