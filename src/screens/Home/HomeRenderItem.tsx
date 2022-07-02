import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {horizontalScale, normalizeFontSize, verticalScale} from "../../utils/functions";
import {COLORS} from "../../utils/theme";
import {useDispatch} from "react-redux";
import {savePostDetails} from "../../redux/actions/postDetails";
import {routeNames} from "../../navigation/routeNames";
import {navigate} from "../../utils/navigation";

export const HomeRenderItem = ({item}: any) => {
    const dispatch= useDispatch()
    const onPressItem = () =>{
        dispatch(savePostDetails(item))
        navigate(routeNames?.POST_DETAILS)
    }
    return(
        <Pressable style={styles.item} onPress={onPressItem} >
            <Text style={styles.title} numberOfLines={3} >
                {item?.title}
            </Text>
            <Text style={styles.body} numberOfLines={4} >
                {item?.body}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item:{
        padding: verticalScale(10),
        borderColor: COLORS.GRAY_II,
        borderWidth: verticalScale(0.5),
        marginTop: verticalScale(10),
        marginHorizontal: horizontalScale(16),
        borderRadius: verticalScale(7),
        backgroundColor: COLORS.GRAY_III
    },
    title:{
        fontSize: normalizeFontSize(18),
        fontWeight: 'bold',
        textAlign: 'left',
        lineHeight: verticalScale(24)
    },
    body:{
        fontSize: normalizeFontSize(16),
        textAlign: 'left',
        marginTop: verticalScale(10),
        lineHeight: verticalScale(20)
    },

})
