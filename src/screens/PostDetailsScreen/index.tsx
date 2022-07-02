import React, {useEffect} from "react";
import {FlatList, Image, ListRenderItem, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../redux/actions/postDetails";
import {horizontalScale, normalizeFontSize, verticalScale} from "../../utils/functions";
import {COLORS, IMAGES} from "../../utils/theme";
import {HeaderDetails} from "./HeaderDetails";
import {CommentItem} from "./CommentItem";
import {CommentType, initialStatesType} from "../../utils/types";
import {AppDispatch, RootState} from "../../redux/store";

type postType ={
    id: string,
    user_id: string,
    title: string,
    body: string
}

export const PostDetailsScreen = () =>{
    const {postDetails, commentsList} = useSelector((state: initialStatesType) => ({
        postDetails: state.postDetailsData.postDetails,
        commentsList: state.postDetailsData.commentsList,
    }))

    const dispatch= useDispatch<AppDispatch>()


    useEffect(() => {
       dispatch(fetchComments())
    }, [dispatch]);



const ListHeaderComponent = () =>{
    return(
        <View style={styles.ListHeaderComponentContainer} >
            <View style={styles.titleView} >
                <Image source={IMAGES.avatar} style={styles.avatar} />
            <Text style={styles.postTitle} >
                {postDetails?.title}
            </Text>
            </View>
            <Text style={styles.postBody} >
                {postDetails?.body}
            </Text>
            {
                commentsList?.length> 0 && <Text style={styles.commentsTitle} >
                Comments
                </Text>
            }
        </View>
    )
}
    const renderItem = ({item}: {item: CommentType}) =>{
    return(
        <CommentItem item={item} />
     )
}

    return(
        <View style={styles.container} >
            <HeaderDetails />
        <FlatList
          renderItem={renderItem}
          data={commentsList}
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={styles.contentContainerStyle}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: COLORS.WHITE
    },
    contentContainerStyle:{
        paddingHorizontal: horizontalScale(20),
        paddingTop: verticalScale(15),
        paddingBottom: verticalScale(30),
    },
    ListHeaderComponentContainer: {

    },
    postTitle:{
        fontSize: normalizeFontSize(20),
        lineHeight: verticalScale(22),
        fontWeight: 'bold',
        flex:1
    },
    postBody:{
        fontSize: normalizeFontSize(16),
        lineHeight: verticalScale(20),
        marginTop: verticalScale(15)
    },
    commentsTitle:{
        fontSize: normalizeFontSize(22),
        fontWeight: 'bold',
        marginTop: verticalScale(30),
        marginBottom: verticalScale(10)
    },
    titleView:{
        flexDirection: 'row'
    },
    avatar:{
        height: verticalScale(80),
        width: verticalScale(80)
    }
})
