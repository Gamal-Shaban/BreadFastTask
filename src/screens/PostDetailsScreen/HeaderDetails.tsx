import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {COLORS, IMAGES} from "../../utils/theme";
import {horizontalScale, IS_IOS, normalizeFontSize, verticalScale} from "../../utils/functions";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {resetComments} from "../../redux/actions/postDetails";

export const HeaderDetails = () =>{
    const {goBack} = useNavigation()
    const dispatch = useDispatch()
    return(
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={()=>{
                goBack()
                dispatch(resetComments())
            }} >
                <Image source={IMAGES.back} style={styles.backImage}  />
            </Pressable>

            <Text style={styles.title} >
                Post Details
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        paddingRight: horizontalScale(60),
        paddingLeft: horizontalScale(20),
        borderBottomColor: COLORS.GRAY_II,
        borderBottomWidth: verticalScale(0.5),
        paddingTop: IS_IOS? verticalScale(10): verticalScale(25)
    },
    backButton:{
        height: verticalScale(40),
        width: horizontalScale(40)
    },
    backImage:{
        height: verticalScale(25),
        width: horizontalScale(25)
    },
    title:{
        fontSize: normalizeFontSize(20),
        textAlign: 'center',
        flex:1,
        fontWeight: 'bold'
    }
})
