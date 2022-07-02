import {
 FETCH_HOME_LIST
  , HOME_LOADING,

} from '../actions/types';
import initialStates from '../storeInitialState';

export default (state = initialStates.homeData, action: any) => {
  switch (action.type) {
    case HOME_LOADING:
      return { ...state, isLoading: action?.payload?.isLoading };
    case FETCH_HOME_LIST:
      return { ...state, homeListData: action?.payload?.homeListData };
    default:
      return state;
  }
};
