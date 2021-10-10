import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName="SignIn"
        >
            <Screen 
                name="SignIn"
                component={SignIn}
            />

            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}