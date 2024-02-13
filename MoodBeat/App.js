import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CuratorDMScreen from "./src/screens/CuratorDMScreen";
import CuratorSelectionDMScreen from "./src/screens/CuratorSelectionDMScreen";
import CuratorLMScreen from "./src/screens/CuratorLMScreen";
import CuratorSelectionLMScreen from "./src/screens/CuratorSelectionLMScreen";
import LoginScreenLM from "./src/screens/LoginScreenLM";
import LoginScreenDM from "./src/screens/LoginScreenDM";
import ProfileScreenDM from "./src/screens/ProfileScreenDM";
import ProfileScreenLM from "./src/screens/ProfileScreenLM";
import ProfileSectionDM from "./src/screens/ProfileSectionDM";
import ProfileSectionLM from "./src/screens/ProfileSectionLM";
import CreationScreenLM from './src/screens/CreationScreenLM';
import CreationScreenDM from './src/screens/CreationScreenDM';
import SettingScreenDM from "./src/screens/SettingScreenDM";
import SettingScreenLM from './src/screens/SettingScreenLM';

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        BarlowCondensed_400Regular: require('./assets/Fonts/BarlowCondensed_400Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingLM">
        <Stack.Screen
          name="CuratorDM"
          component={CuratorDMScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CuratorSelectionDM"
          component={CuratorSelectionDMScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CuratorLM"
          component={CuratorLMScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CuratorSelectionLM"
          component={CuratorSelectionLMScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreenDM"
          component={ProfileScreenDM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreenLM"
          component={ProfileScreenLM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileSectionDM"
          component={ProfileSectionDM}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProfileSectionLM" 
        component={ProfileSectionLM} 
        options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreationLM"
          component={CreationScreenLM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreationDM"
          component={CreationScreenDM}
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name="LoginScreenLM"
          component={LoginScreenLM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreenDM"
          component={LoginScreenDM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingDM"
          component={SettingScreenDM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingLM"
          component={SettingScreenLM}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
