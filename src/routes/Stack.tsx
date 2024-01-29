import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "../screens/Login/Splash";
import Login from "../screens/Login/Login";


const Stack = createNativeStackNavigator()

type StackNavigation = {
    Splash: undefined;
    Login: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens;
