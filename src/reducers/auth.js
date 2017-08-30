import * as Actions from '../constants/actions'
import { purgeStoredState } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const initialState = {
  login: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN:
      return { login: true }
    case Actions.LOGOUT:
      purgeStoredState({ storage: AsyncStorage }, ['auth']);
      return { login: false}
    default:
      return state;
  }
}