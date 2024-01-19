import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "../views/Screen";


const Stack = createNativeStackNavigator()

type StackNavigation = {

};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Screen"
                    component={Screen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens;            