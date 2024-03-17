import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "../components";
import { SideMenu } from "../assets";


const Home = () => {
    return(
        <View style={style.container}>
            <HeaderBar title={'Home'} leftButtonIcon={SideMenu} />
            <View style = {style.viewCenter}>
                <Text>Home</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home;
