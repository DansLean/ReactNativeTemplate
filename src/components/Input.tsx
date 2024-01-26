import React from "react";
import { TextInput, StyleSheet, View, NativeSyntheticEvent, TextInputChangeEventData, Keyboard, KeyboardTypeOptions } from "react-native";


type inputProps = {
    placeholder?: string,
    value?: string,
    handleChange?: any,
    onSubmit?: () => void,
    keyboardType?: KeyboardTypeOptions,
}

const Input = (props: inputProps) => {
    return (
        <View>
            <TextInput
            onChangeText={ (e) => props.handleChange(e)}
            value={props.value} placeholder={props.placeholder}
            placeholderTextColor={'#9D9D9D'}
            style={style.input}
            onSubmitEditing={props.onSubmit}
            blurOnSubmit={false}
            autoCapitalize="none"
            keyboardType={ props.keyboardType != undefined ? props.keyboardType : "default"}
            />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        fontSize: 20,
        backgroundColor: 'lightgray',
        paddingLeft: 7,
        borderWidth: 1,
        height: 60,
        marginHorizontal: '5%',
    },
})

export default Input;
