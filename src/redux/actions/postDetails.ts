import {
    FETCH_COMMENTS_LIST,
    FETCH_HOME_LIST,
    HOME_LOADING, POST_LOADING, RESET_COMMENTS, SAVE_POST_DETAILS

} from './types';
import axios from "axios";
import {PostDetailsType} from "../../utils/types";
import {AppDispatch} from "../store";



const postLoading = (isLoading: boolean) => {
  return {
    type: POST_LOADING,
    payload: { isLoading },
  };
};



export function savePostDetails(postDetails: PostDetailsType) {
  return{
      type: SAVE_POST_DETAILS,
      payload:{
          postDetails
      }
  }
}

export const resetComments = () =>{
    return{
        type: RESET_COMMENTS
    }
}



export function fetchComments() {
    return async (dispatch: AppDispatch) => {
        dispatch(postLoading(true));
        return axios
            .get('https://gorest.co.in/public/v2/comments')
            .then(res => {
                console.log('data', res?.data)
                dispatch({
                    type: FETCH_COMMENTS_LIST,
                    payload: {
                        commentsList: res?.data,
                    },
                });
                return res;
            })
            .catch(e => {
                console.log('e', e);
            })
            .finally(() => {
                dispatch(postLoading(false));
            });
    };
}




