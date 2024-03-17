import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import { Logo } from "../../assets";


const Splash = () => {
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        setTimeout( () => {
            navigation.navigate("Login");
        }, 2000);
    });
    return(
        <View style={style.container}>
            <Logo width={"50%"} height={"50%"} />
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

export default Splash;
