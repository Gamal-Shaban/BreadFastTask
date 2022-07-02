import {
  FETCH_COMMENTS_LIST,
    POST_LOADING, RESET_COMMENTS,
   SAVE_POST_DETAILS,

} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.postDetailsData, action: any) => {
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
