import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import style from './style';
import { setStorageData } from "../../services/storage";

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import theme from '../../theme';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const writeTokenToStorage = async (token, name) => {
    await setStorageData("TOKEN", token);
    await setStorageData("USER_NAME", name);
    await setStorageData("PROFESSIONAL", name);
  };

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    }
    await api.post("authenticate", body).then(response => {
      if (response.status == 200) {
        api.defaults.headers.common["authorization"] = `Bearer ${response.data.token}`;
        writeTokenToStorage(response.data.token, response.data.userName, response.data.isProfessional);
        navigation.navigate("Dashboard");
      }
    }).catch(error => {
      console.error(`Error ${error.response.status}:`, error.response.data.message);
    });

    
    return;
  };

  const handleRegister = () => {
    // Lógica de registro aqui
    navigation.navigate("Register"); 
  };

  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={style.logo}
      />
      <TextInput
        id="email"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        id="senha"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={style.registerText}>Não tem uma conta? Registre-se aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
