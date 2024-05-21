import { GameData } from '@packages/sdk/resources/game'
import styled from 'styled-components'

type Background = {
  status: GameData['status']
}

export const StyledGameBackground = styled.div<Background>`
  bottom: 0;
  display: flex;
  height: 100vh;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
`

export const StyledGameWrapper = styled.div<Background>`
  display: flex;
  height: 100%;
  position: relative;
`

export const StyledHighScoreHeader = styled.h2`
  display: flex;
  flex: 1 1 100%;
  height: 40px;
  justify-content: center;
  margin-bottom: 0;
`

export const StyledHighScoreText = styled.span`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
`

export const StyledHighScoreForm = styled.form`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  margin: 30px auto 0;
  max-width: 50%;
`

export const StyledHighScoreLabel = styled.label`
  display: flex;
  flex: 1 1 100%;
`

export const StyledHighScoreInput = styled.input`
  background-color: #eee;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  font-size: 16px;
  margin: 15px 0;
  padding: 8px;
  outline: 1px solid #000;
`

export const StyledHighScoreButton = styled.button`
  background-color: #000;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex: 1 1 100%;
  font-size: 16px;
  justify-content: center;
  outline: 0;
  padding: 16px;
`

export const StyledNewGameButton = styled.button`
  background-color: #000;
  border: 0;
  bottom: 30px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  left: 30px;
  justify-content: center;
  outline: 0;
  padding: 16px;
  position: absolute;
  width: 200px;
`
