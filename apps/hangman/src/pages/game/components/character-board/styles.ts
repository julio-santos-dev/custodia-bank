import { CharStatus } from '@packages/sdk/resources/game'
import styled from 'styled-components'

export const StyledCharacterBoard = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  margin: 0 auto;
  width: 80vw;
`

export const StyledCharacterBoardList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`

export const StyledCharacterBoardItem = styled.li`
  align-items: flex-end;
  border-bottom: 4px solid #000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 6px;
  padding: 0 0 6px;
  width: 50px;
`

export const StyledCharacterBoardChar = styled.span`
  color: #000;
  display: flex;
  font-family: 'Oswald', sans-serif;
  font-size: 48px;
  font-weight: 400;
  justify-content: center;
  width: 50px;
`
