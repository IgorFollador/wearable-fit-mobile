import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { getStorageData, setStorageData } from '../../services/storage';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleExit = async () => {
    await setStorageData("TOKEN", "");
    api.defaults.headers.common["authorization"] = "";
    navigation.navigate("Login"); 
  };

  const userName = async () => {
    return await getStorageData('USER_NAME');
  }

  return (
    <View style={style.container}>
        <Image
            source={require('../../assets/logo.png')}
            style={style.logo}
        />
        <Text style={style.title}>Bem vindo {userName}</Text>
        <TouchableOpacity onPress={handleExit}>
            <Text style={style.buttonText}>Sair</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
