import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import React from 'react'
import { StyledCharacterBoardChar } from '../../styles'
import { useSelector } from '@packages/sdk'

interface Props {
  char: string
  index: number // What position of the word the char is at
}

export default function Char({ char, index }: Props): JSX.Element {
  const numGuesses = useSelector(gameSelectors.numGuesses)
  const status = useSelector(gameSelectors.status)
  const wordGuessed = useSelector(gameSelectors.wordGuessed)
  const wordGuessedIndex = useSelector(gameSelectors.wordGuessedIndex) // Needed to trigger state update
  const isCorrect = wordGuessed[index] == char
  const charDisplay = isCorrect || status != 'playing' ? char : ''
  const charStatus = 'playing'

  return (
    <StyledCharacterBoardChar status={charStatus}>
      {charDisplay}
    </StyledCharacterBoardChar>
  )
}
