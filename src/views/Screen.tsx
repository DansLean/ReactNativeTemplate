import React from "react";
import { View, StyleSheet } from "react-native";
import Letter from "../assets/Vector.svg";


const Screen = () => {
    return(
        <View style={style.container}>
            <Letter width={"50%"} height={"50%"} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Screen;
