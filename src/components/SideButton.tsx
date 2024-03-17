import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView } from "react-native";
import { SvgXml } from "react-native-svg";
import SideMenuIcon from "../assets/SideMenuIcon";

export default function SideButton() {
    const [showSideBar, setShowSideBar] = useState(false);

    const openSideBar =() => {
        setShowSideBar(true);
    };

    const closeSideBar =() => {
        setShowSideBar(false);
    };

    return (
        <View style={style.view}>
            <View style={style.sideButton}>
                <TouchableOpacity onPress={openSideBar}>
                    <SvgXml xml={SideMenuIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        /* borderWidth: 1, 
        borderColor: 'red', */
        /* width: '100%',
        height: '100%', */ 
        /* zIndex:2, */
    },
    sideButton: {
        /* borderWidth: 1, 
        borderColor: 'red', */      
        /* marginLeft: '6%', */
        /* alignSelf: 'flex-start', */     
    },
})