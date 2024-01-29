import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CuratorDMScreen from './src/screens/CuratorDMScreen';
import CuratorSelectionDMScreen from './src/screens/CuratorSelectionDMScreen';
import CuratorLMScreen from './src/screens/CuratorLMScreen';
import CuratorSelectionLMScreen from './src/screens/CuratorSelectionLMScreen';
import CreationScreenLM from './src/screens/CreationScreenLM';
import CreationScreenDM from './src/screens/CreationScreenDM';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreationLM">
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
          name="CreationLM"
          component={CreationScreenLM}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreationDM"
          component={CreationScreenDM}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
