import React,{useEffect} from "react";
import {FlatList, StyleSheet, Text, View, ActivityIndicator} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeList} from "../../redux/actions/Home";
import {normalizeFontSize, verticalScale} from "../../utils/functions";
import {COLORS} from "../../utils/theme";
import {HomeRenderItem} from "./HomeRenderItem";
import {Loading} from "../../components/Loading";
import {CommentType, initialStatesType, PostDetailsType} from "../../utils/types";
import {AppDispatch} from "../../redux/store";


type postType = {
    id: string,
    user_id: string,
    title: string,
    body: string
}

const Header = () =>{
    return(
        <View style={styles.header} >
            <Text style={styles.title} >
                Posts
            </Text>
        </View>
    )
}


export const HomeScreen = () =>{
    const dispatch = useDispatch<AppDispatch>()
    const {homeData, loading} = useSelector((state: initialStatesType) => (
        {
            homeData: state?.homeData?.homeListData,
            loading: state?.homeData?.isLoading
        }
    ))

    useEffect(() => {
       dispatch(fetchHomeList())
    }, [dispatch]);

    const renderItem = ({item}: {item: PostDetailsType}) =>{
        return <HomeRenderItem item={item} />
    }

    return(
        <View style={styles.container}>
           <Header />
            {
                loading ?
                    <Loading />
                :
                    <FlatList data={homeData} renderItem={renderItem} contentContainerStyle={styles.contentContainerStyle} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE
    },
    title: {
     fontSize: normalizeFontSize(18),
     textAlign: 'center',
     fontWeight: 'bold'
    },
    header: {
     height: verticalScale(45),
     alignSelf: 'stretch',
     borderBottomWidth: verticalScale(0.5),
     borderBottomColor: COLORS.GRAY_II,
     alignItems: 'center',
     justifyContent: 'center',
    },
    contentContainerStyle:{
        marginTop: verticalScale(15),
        paddingBottom: verticalScale(30)
    }
})
