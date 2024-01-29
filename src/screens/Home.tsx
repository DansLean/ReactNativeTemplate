import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Home = () => {
    return(
        <View style={style.container}>
            <Text>Home</Text>
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

export default Home;
