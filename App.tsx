/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect,useRef} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet, Text,
    useColorScheme, View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import {appLoaded} from "./src/redux/actions/appState";
import {IS_IOS} from "./src/utils/functions";
import {useDispatch} from "react-redux";
import AppNavigation from "./src/navigation";
import {AppDispatch} from "./src/redux/store";

const App = () => {
    const isMounted = useRef(false);

  const dispatch=useDispatch<AppDispatch>()

    const seconds =2500

    useEffect(() => {
        if (!isMounted.current) {
            setTimeout(() => {
                dispatch(appLoaded());
            }, seconds);
        }
        isMounted.current = true;
    }, [dispatch]);


  return (
        <View style={styles.container}>

            <AppNavigation />

        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    }
});

export default App;
