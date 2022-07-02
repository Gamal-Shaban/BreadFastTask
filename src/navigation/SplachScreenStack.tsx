import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screens/Splash';
import {routeNames} from "./routeNames";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SplashScreenStack = () => (
  <Stack.Navigator

    >
    <Stack.Screen
        options={{
            headerShown: false,
        }}
      name={routeNames.SPLASH}
      component={Index}
    />
  </Stack.Navigator>
);

export default SplashScreenStack;
