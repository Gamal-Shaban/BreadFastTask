import {
  APP_IS_LOADED,
} from './types';


export const appLoaded = (): (dispatch) => void => {
  return dispatch => {
    dispatch({
      type: APP_IS_LOADED,
    });
  };
};


