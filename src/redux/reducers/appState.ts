import {
  APP_IS_LOADED,
} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.appState, action: any) => {
  switch (action.type) {
    case APP_IS_LOADED:
      return { ...state, isLoaded: true };
    default:
      return state;
  }
};
