import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import style from './style';
import { setStorageData } from "../../services/storage";

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import theme from '../../theme';

const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessional, setIsProfessional] = useState('');
  
  const writeUserDataToStorage = async (token, name) => {
    await setStorageData("TOKEN", token);
    await setStorageData("USER_NAME", name);
    await setStorageData("PROFESSIONAL", name);
  };

  const handleRegister = async () => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isProfessional: isProfessional
    }

    await api.post("users", body).then(response => {
      if (response.status == 201) {
        handleLogin();
      }
    }).catch(error => {
      console.error(`Error ${error.response.status}:`, error.response.data.message);
    });
    
    return;
  };

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    }

    await api.post("auth", body).then(response => {
      if (response.status == 200) {
        api.defaults.headers.common["authorization"] = `Bearer ${response.data.token}`;
        writeUserDataToStorage(response.data.token, response.data.userName, response.data.isProfessional);
        navigation.navigate("Dashboard");
      }
    }).catch(error => {
      console.error(`Error ${error.response.status}:`, error.response.data.message);
    });
    
    return;
  };

  const navigateToLogin = async () => {
    navigation.navigate("Login");
    return;
  };

  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={style.logo}
      />
      <TextInput
        id="firstName"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="Nome"
        onChangeText={text => setFirstName(text)}
        autoCapitalize='words'
        value={firstName}
      />
      <TextInput
        id="lastName"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="Sobrenome"
        onChangeText={text => setLastName(text)}
        autoCapitalize='words'
        value={lastName}
      />
      <TextInput
        id="email"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        autoCapitalize='none'
        value={email}
      />
      <TextInput
        id="senha"
        placeholderTextColor={theme.color_black}
        style={style.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        autoCapitalize='none'
        value={password}
        secureTextEntry
      />
      <SelectDropdown
        buttonStyle={style.selectInput}
        data={['Cliente', 'Profissional']}
        defaultButtonText='Selecione seu tipo de perfil'
        onSelect={(selectedItem, index) => {
          if (selectedItem === 'Profissional') {
            setIsProfessional(true);
          } else {
            setIsProfessional(false);
          }
        }}
        buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
        rowTextForSelection={(item, index) => {return item}}
      />
      <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={style.buttonText}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={style.loginText}>Já possui uma conta? Entre aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
