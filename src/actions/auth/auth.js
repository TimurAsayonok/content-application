import * as Actions from '../../constants/actions'

export function login() {
  return (dispatch) => {
    dispatch({ type: Actions.LOGIN });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: Actions.LOGOUT });
  }
}