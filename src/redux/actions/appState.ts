import {
  APP_IS_LOADED,
} from './types';
import {AppDispatch} from "../store";


export const appLoaded = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: APP_IS_LOADED,
    });
  };
};


