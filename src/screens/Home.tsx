import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBar } from "../components";
import { SideMenu } from "../assets";
import { requestUserPermission } from "../util/functions";
import MyTabs from "../components/BottomTab";


const Home = () => {
    requestUserPermission();
    
    return(
        <View style={style.container}>
            <MyTabs />
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
