import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { StatusBar } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar barStyle="light-content" />
        <Navigator>
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Signup" component={SignupScreen} />
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Login" component={LoginScreen} />
        </Navigator>
    </>
  )
}

export default AuthStack