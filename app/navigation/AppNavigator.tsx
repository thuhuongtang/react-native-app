import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Navigator>
            <Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        </Navigator>
    )
}

export default AppNavigator