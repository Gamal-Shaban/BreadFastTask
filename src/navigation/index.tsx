import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import MainStack from './MainStack';
import SplashScreenStack from './SplachScreenStack';
import { navigationRef } from '../utils/navigation';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '../utils/theme';
import {initialStatesType} from "../utils/types";


const AppNavigation = () => {
  const { isLoaded } = useSelector((state: initialStatesType) => ({
    isLoaded: state?.appState?.isLoaded,
  }));
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoaded ? (
        <SafeAreaView style={styles.container}>
          <MainStack />
        </SafeAreaView>
      ) : (
        <SplashScreenStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
