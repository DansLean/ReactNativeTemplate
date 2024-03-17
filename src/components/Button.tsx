import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


type ButtonProps = {
    text?: string,
    onPress?: any,
    icon?: any,
}

const Button = (props: ButtonProps) => {
    return(
        <TouchableOpacity style={style.button} onPress={props.onPress ? (e) => props.onPress(e) : () => {}}>
            { props.icon ? <props.icon style={props.text ? style.iconWithText : style.iconWithoutText} /> : <></> }
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWithText: {
        position: 'absolute',
        left: 10,
    },
    iconWithoutText: {},
    text: {
        fontSize: 20,
        color: 'white',
    },
})

export default Button;
