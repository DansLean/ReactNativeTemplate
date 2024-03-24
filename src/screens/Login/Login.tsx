import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Input, PassInput, Button } from "../../components";
import { Logo } from "../../assets";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/Stack';


const Login = () => {
    const navigation = useNavigation<StackTypes>();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const email_ref = useRef<TextInput>();
    const password_ref = useRef<TextInput>();

    const email_onSubmit = () => {
        if (password_ref.current !== undefined && !password_ref.current.isFocused()) {
          password_ref.current?.focus();
        }
      }

      const password_onSubmit = () => {
        if (password_ref.current !== undefined && password_ref.current?.isFocused()) {
          password_ref.current?.blur();
          handleSubmit();
    
        }
      }

      const handleSubmit = () => {
        //fazer login
        navigation.replace("Home");
      }

    return(
        <View style={style.container}>
            <View style={style.loginBox}>
                <View style={{alignItems: "center"}}>
                    <Logo width={100} height={100} />
                </View>
                <View style={style.inputBox}>
                    <Text style={style.textTitle}>Email</Text>
                    <Input placeholder="Digite aqui seu email" value={email} handleChange={setEmail} onSubmit={email_onSubmit} input_ref={email_ref} />
                </View>
                <View style={style.inputBox}>
                    <Text style={style.textTitle}>Senha</Text>
                    <PassInput placeholder="Digite aqui sua senha" value={password} handleChange={setPassword} onSubmit={password_onSubmit} pass_ref={password_ref} />
                </View>
                <Button text="Entrar" onPress={handleSubmit} />
                <TouchableOpacity style={{alignItems: 'center', paddingTop: '2%'}} onPress={() => navigation.navigate("RecoveryPassword")}>
                    <Text style={style.textLostPassword}>Esqueci a senha</Text>
                </TouchableOpacity>
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
        paddingTop: '3%',
        fontSize: 15,
    },
    inputBox: {
        paddingBottom: '5%',
    }
})

export default Login;
