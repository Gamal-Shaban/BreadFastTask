export type initialStatesType = {
    appState: {
        isLoaded: boolean,
    },
    homeData:{
        isLoading: boolean,
        homeListData: PostDetailsType[]
    },
    postDetailsData:{
        isLoading: boolean,
        postDetails: PostDetailsType | null,
        commentsList: CommentType[]
    }
}

export type PostDetailsType = {
    id: string,
    user_id: string,
    title: string,
    body: string
}
export type CommentType = {
    id: string,
    post_id: string,
    name: string,
    email: string,
    body: string
}
