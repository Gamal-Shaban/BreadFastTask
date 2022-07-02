import {
  APP_IS_LOADED,
  FETCH_UPDATE_APP,
  RESET_UPDATE_APP,
  SHOW_ADD_EVENT_TO_CALENDAR,
} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.appState, action) => {
  switch (action.type) {
    case APP_IS_LOADED:
      return { ...state, isLoaded: true };
    default:
      return state;
  }
};
