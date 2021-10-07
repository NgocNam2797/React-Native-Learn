import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Profile} from '../Screens';
import navigationString from '../Constans/navigationString';
const Stack = createNativeStackNavigator();
function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={navigationString.HOME} component={Home}
                />
                <Stack.Screen name={navigationString.PROFILE} component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;