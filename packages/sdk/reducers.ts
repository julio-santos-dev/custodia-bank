import { combineReducers } from 'redux'
import gameReducer from './resources/game/reducer'
import userReducer from './resources/user/reducer'

export default combineReducers({
  game: gameReducer,
  user: userReducer,
})
