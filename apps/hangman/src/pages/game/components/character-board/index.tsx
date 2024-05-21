import Char from './components/char'
import FadeIn from '~/components/fade-in'
import React from 'react'
import {
  StyledCharacterBoard,
  StyledCharacterBoardList,
  StyledCharacterBoardItem,
} from './styles'
import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import { useSelector } from '@packages/sdk'

export default function CharacterBoard(): JSX.Element {
  const word = useSelector(gameSelectors.word)
  const wordLength = useSelector(gameSelectors.wordLength)

  // If there is no word loaded from redux, don't render anything yet.
  if (!wordLength) {
    return null
  }

  return (
    <StyledCharacterBoard>
      <StyledCharacterBoardList>
        {word.split('').map((char, i) => {
          const key = `character-board-item-${char}-${i}`

          return (
            <FadeIn direction="up" distance={25} key={key}>
              <StyledCharacterBoardItem>
                <Char char={char} index={i} />
              </StyledCharacterBoardItem>
            </FadeIn>
          )
        })}
      </StyledCharacterBoardList>
    </StyledCharacterBoard>
  )
}
