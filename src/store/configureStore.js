import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger' 
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'remote-redux-devtools';
import { autoRehydrate } from 'redux-persist';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))(createStore);

const getStore = () => {
  const store = autoRehydrate()(createStoreWithMiddleware)(rootReducer);

  return store;
};

export default getStore;