import { AsyncStorage } from 'react-native';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

const saveFilter = createFilter(
  ['news', 'auth']
);

const persistConfig = {
  storage: AsyncStorage,
  transforms: [saveFilter]
};

export default persistConfig;