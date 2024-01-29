import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';
import Input from "../../components/Input";
import Logo from "../../assets/Logo.svg";
import Back from "../../assets/Back.svg";
import Button from "../../components/Button";


const RecoveryPassword = () => {
    const navigation = useNavigation<StackTypes>();

    const [email, setEmail] = useState<string>("");

    const email_ref = useRef<TextInput>();

    const email_onSubmit = () => {
          handleSubmit();
      }

      const handleSubmit = () => {
        //enviar email de recuperação de senha        
      }

    return(
        <View style={style.container}>
            <View style={style.loginBox}>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={{position: 'absolute', left: -7, top: 4}} onPress={() => navigation.navigate("Login")}>
                        <Back width={30} height={30} />
                    </TouchableOpacity>
                    <Logo width={100} height={100} />
                </View>
                <View style={style.inputBox}>
                    <Text style={style.textTitle}>Esqueceu a senha?</Text>
                    <Input placeholder="Digite aqui seu email" value={email} handleChange={setEmail} onSubmit={email_onSubmit} input_ref={email_ref} />
                </View>
                <Button text="Enviar email de recuperação" onPress={handleSubmit} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    loginBox: {
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        paddingTop: '3%',
        paddingBottom: '5%',
        marginHorizontal: '5%',
    },
    textTitle: {
        fontSize: 20,
        color: 'black',
    },
    textLostPassword: {
        fontSize: 15,
    },
    inputBox: {
        paddingBottom: '5%',
    }
})

export default RecoveryPassword;
