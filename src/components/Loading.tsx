import React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

export const Loading = () =>{
    return(
        <View style={styles.container}  >
            <ActivityIndicator size={'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: "center",
        alignItems: 'center'
    }
})
