import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';
import { getStorageData, setStorageData } from '../../services/storage';

const Dashboard = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);

  const handleExit = async () => {
    await setStorageData("TOKEN", "");
    api.defaults.headers.common["authorization"] = "";
    navigation.navigate("Login"); 
  };

  useEffect(() => {
    const getData = async () => {
      const userName = await getStorageData('USER_NAME');

      setUserData({
        userName: userName
      });
    }
    getData().catch((error) => {console.log(error)});
  }, [])

  return (
    <>
      <View style={style.container}>
          <Image
              source={require('../../assets/logo.png')}
              style={style.logo}
          />
          <Text style={style.title}>Bem vindo {userData.userName}</Text>
          <TouchableOpacity onPress={handleExit}>
              <Text style={style.buttonText}>Sair</Text>
          </TouchableOpacity>
      </View>
    </>
  );
};

export default Dashboard;
