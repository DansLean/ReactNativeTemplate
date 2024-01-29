import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

import Eye from "../assets/Eve.svg";
import EyeOff from "../assets/EyeOff.svg";


type inputProps = {
    placeholder?: string,
    value?: string,
    handleChange: any,
    onSubmit: () => void,
    pass_ref: any,
}

const PassInput = (props: inputProps) => {
    const [hidePass, setHidePass] = useState(true);

    return (
        <View>
            <TextInput
                ref={props.pass_ref}
                placeholder={props.placeholder}
                placeholderTextColor={'#9D9D9D'}
                style={style.input}
                value={props.value}
                onChangeText={(texto) => props.handleChange(texto)}
                onChange={props.handleChange}
                secureTextEntry={hidePass}
                onSubmitEditing={props.onSubmit}
                blurOnSubmit={false}
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={style.iconRight}
                onPress={() => setHidePass(!hidePass)}
            >
                {
                    hidePass ?
                        <Eye />
                        :
                        <EyeOff />
                }
            </TouchableOpacity>
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
    },
    iconLeft: {
        position: 'absolute',
        right: '14%',
        bottom: '22%',
    },
    iconRight: {
        position: 'absolute',
        right: '4%',
        bottom: '30%',
    },
})

export default PassInput;
