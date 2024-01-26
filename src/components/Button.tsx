import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


type ButtonProps = {
    text: string,
    onPress?: any,
}

const Button = (props: ButtonProps) => {
    return(
        <TouchableOpacity style={style.button} onPress={(e) => props.onPress(e)}>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'lightgray',
    },
    text: {
        fontSize: 20,
    },
})

export default Button;
