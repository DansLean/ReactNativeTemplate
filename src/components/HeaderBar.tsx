import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import SideMenuIcon from "../assets/SideMenuIcon";
import { SvgXml } from "react-native-svg";


type headerProps = {
    title: string,
}

export default function HeaderBar(props: headerProps) {
    return(
        <View style={style.headerBar}>
            <View style={style.viewSideButton}>
                <TouchableOpacity>
                    <SvgXml xml={SideMenuIcon}/>
                </TouchableOpacity>
            </View>
            <View style={style.viewTitle}>
                <Text style={style.titleText}>{props.title}</Text>
            </View>
            <View style={style.viewSideButton}/>
        </View>
    )
}

const style = StyleSheet.create({
    headerBar: {
        marginTop: 0,        
        height: 60,
        backgroundColor: '#4f0070',
        flexDirection: 'row',
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    viewTitle: {
        flex: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    viewSideButton: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        //backgroundColor: 'red',
    }
})