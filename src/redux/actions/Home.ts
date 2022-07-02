import {
    FETCH_HOME_LIST,
    HOME_LOADING

} from './types';
import axios from "axios";
import {AppDispatch} from "../store";


const homeLoading = (isLoading: boolean) => {
  return {
    type: HOME_LOADING,
    payload: { isLoading },
  };
};



export function fetchHomeList() {
  return async (dispatch: AppDispatch) => {
    dispatch(homeLoading(true));
    return axios
        .get('https://gorest.co.in/public/v2/posts')
        .then(res => {
          dispatch({
            type: FETCH_HOME_LIST,
            payload: {
              homeListData: res?.data,
            },
          });
          return res;
        })
        .catch(e => {
          console.log('e', e);
        })
        .finally(() => {
          dispatch(homeLoading(false));
        });
  };
}



