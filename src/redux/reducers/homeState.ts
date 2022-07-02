import {
  APP_IS_LOADED, FETCH_HOME_LIST,
  FETCH_UPDATE_APP, HOME_LOADING,
  RESET_UPDATE_APP,
  SHOW_ADD_EVENT_TO_CALENDAR,
} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.homeData, action) => {
  switch (action.type) {
    case HOME_LOADING:
      return { ...state, isLoading: action?.payload?.isLoading };
    case FETCH_HOME_LIST:
      return { ...state, homeListData: action?.payload?.homeListData };
    default:
      return state;
  }
};
