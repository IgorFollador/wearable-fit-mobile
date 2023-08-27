import {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import Routes from "./src/routes";
import { getStorageData } from "./src/services/storage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    const getData = async () => {
      
      if (await getStorageData("TOKEN")) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

    }
    getData().catch((error) => {console.log(error)});
  }, [])

  // Load all fonts before start app
  const [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes onLayout={onLayoutRootView()} isAuthenticated={isAuthenticated} />
    </>
  );
}
