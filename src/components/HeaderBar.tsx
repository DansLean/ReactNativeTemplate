import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


type headerProps = {
    title: string,
    leftButtonIcon?: any,
    leftOnPress?: any,
    rightButtonIcon?: any,
    rightOnPress?: any,
}

const HeaderBar = (props: headerProps) => {
    return(
        <View style={style.container}>
            { props.leftButtonIcon ? <TouchableOpacity style={style.leftButton} onPress={props.leftOnPress ? (e) => props.leftOnPress(e) : () => {}}><props.leftButtonIcon /></TouchableOpacity> : <></> }
            <Text style={style.title}>{props.title}</Text>
            { props.rightButtonIcon ? <TouchableOpacity style={style.rightButton} onPress={props.rightOnPress ? (e) => props.rightOnPress(e) : () => {}}><props.rightButtonIcon /></TouchableOpacity> : <></> }
        </View>
    )
}

const style = StyleSheet.create({
    container: {        
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    leftButton: {
        position: 'absolute',
        left: 10,
    },
    rightButton: {
        position: 'absolute',
        right: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
})

export default HeaderBar;
