import {initialStatesType} from "../utils/types";

const initialStates: initialStatesType = {
  appState: {
    isLoaded: false,
  },
homeData:{
  isLoading: true,
  homeListData: []
},
  postDetailsData:{
  isLoading: true,
  postDetails: null,
  commentsList: []
}


};

export default initialStates;
