import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' 
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'remote-redux-devtools';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))(createStore);
// function configureStore(initialState) {
//   const enhancer = compose(
//     applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware
//     ),
//   );
//   return createStore(rootReducer, initialState, enhancer);
// }

export const store = createStoreWithMiddleware(rootReducer);