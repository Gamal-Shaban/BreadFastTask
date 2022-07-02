import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {horizontalScale, normalizeFontSize, verticalScale} from "../../utils/functions";
import {COLORS, IMAGES} from "../../utils/theme";
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
            <View style={styles.avatarView} >
                <Image source={IMAGES.avatar} style={styles.avatar} />
                <Text style={styles.title} numberOfLines={3} >
                    {item?.title}
                </Text>
            </View>

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
        lineHeight: verticalScale(24),
        flex: 1
    },
    body:{
        fontSize: normalizeFontSize(16),
        textAlign: 'left',
        marginTop: verticalScale(10),
        lineHeight: verticalScale(20)
    },
    avatarView:{
        flexDirection: 'row'
    },
    avatar:{
        height: verticalScale(80),
        width: verticalScale(80)
    }

})
