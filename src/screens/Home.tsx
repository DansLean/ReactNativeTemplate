import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "../components/HeaderBar";
import { SvgXml } from "react-native-svg";
import SideMenuIcon from "../assets/SideMenuIcon";

const Home = () => {
    return(
        <View style={style.container}>
            <HeaderBar title={'Home'}></HeaderBar>
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
