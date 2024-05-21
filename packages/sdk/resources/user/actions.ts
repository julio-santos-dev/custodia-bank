import * as types from './types'
import { UserLogin } from '.'

export const login = ({ password, username }: UserLogin) => (dispatch): void =>
  dispatch({
    type: types.LOGIN,
    payload: {},
  })
