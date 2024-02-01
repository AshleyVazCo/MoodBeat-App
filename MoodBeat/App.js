import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CuratorDMScreen from './src/screens/CuratorDMScreen';
import CuratorSelectionDMScreen from './src/screens/CuratorSelectionDMScreen';
import CuratorLMScreen from './src/screens/CuratorLMScreen';
import CuratorSelectionLMScreen from './src/screens/CuratorSelectionLMScreen';
import LoginScreenLM from './src/screens/LoginScreenLM';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CuratorDM">
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
          name="LoginScreenLM"
          component={LoginScreenLM}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

