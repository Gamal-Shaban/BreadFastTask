import {
  APP_IS_LOADED, FETCH_COMMENTS_LIST, FETCH_HOME_LIST,
  FETCH_UPDATE_APP, HOME_LOADING, POST_LOADING, RESET_COMMENTS,
  RESET_UPDATE_APP, SAVE_POST_DETAILS,
  SHOW_ADD_EVENT_TO_CALENDAR,
} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.postDetailsData, action) => {
  switch (action.type) {
    case POST_LOADING:
      return { ...state, isLoading: action?.payload?.isLoading };
    case SAVE_POST_DETAILS:
      return { ...state, postDetails: action?.payload?.postDetails };
     case FETCH_COMMENTS_LIST:
      return { ...state, commentsList: action?.payload?.commentsList };
      case RESET_COMMENTS:
      return { ...state, commentsList: [] };
    default:
      return state;
  }
};
