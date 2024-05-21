import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import Heart from '~/components/heart'
import React from 'react'
import { StyledHeartList, StyledHeartItem } from './styles'
import { useSelector } from '@packages/sdk'

export default function HeartList(): JSX.Element {
  const hearts = useSelector(gameSelectors.hearts)
  const heartsIndex = useSelector(gameSelectors.heartsIndex)

  return (
    <StyledHeartList>
      {hearts.map((heart, i) => {
        return (
          <StyledHeartItem>
            <Heart status={heart} />
          </StyledHeartItem>
        )
      })}
    </StyledHeartList>
  )
}
