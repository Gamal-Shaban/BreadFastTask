import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appStateReducer from './appState';
import homeStateReducer from './homeState';
import postDetailsStateReducer from './postDetailsState';

const appStatePersistConfig = {
  key: 'appState',
  storage: AsyncStorage,
  whitelist: [''],
};
const homeStatePersistConfig = {
  key: 'homeData',
  storage: AsyncStorage,
  whitelist: [''],
};
const postDetailsStatePersistConfig = {
  key: 'postDetailsData',
  storage: AsyncStorage,
  whitelist: [''],
};

export default combineReducers({
  appState: persistReducer(appStatePersistConfig, appStateReducer),
  homeData: persistReducer(homeStatePersistConfig, homeStateReducer),
  postDetailsData: persistReducer(postDetailsStatePersistConfig, postDetailsStateReducer),
});
