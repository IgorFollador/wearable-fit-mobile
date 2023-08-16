import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { setStorageData } from "../../services/storage";

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import theme from '../../theme';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    async function cleanCache() {
      await setStorageData("TOKEN", "");
    }
    cleanCache();
  }, [])
  
  const writeTokenToStorage = async (token, name) => {
    await setStorageData("TOKEN", token);
    await setStorageData("USER_NAME", name);
  };

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    }
    await api.post("authenticate", body).then(response => {
      response.data.isProfessional ?
      navigation.navigate("RoutesDrawerProfessional") :
      navigation.navigate("RoutesDrawer") 
      api.defaults.headers.common["authorization"] = `Bearer ${response.data.token}`;
      writeTokenToStorage(response.data.token, response.data.completeName, response.data.isProfessional.toString());
    }).catch(error => {
      console.error("Login Error", error.response);
    });

    return;
  };

  const handleRegister = () => {
    // Lógica de registro aqui
    navigation.navigate("Configuration"); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/favicon.png')}
        style={styles.logo}
      />
      <TextInput
        id="email"
        placeholderTextColor={theme.color_black}
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        id="senha"
        placeholderTextColor={theme.color_black}
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Não tem uma conta? Registre-se aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
