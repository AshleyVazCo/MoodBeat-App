import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CuratorDarkModeScreen from './src/screens/CuratorDarkModeScreen';
import CreationScreen from './src/screens/CreationScreen';
import BoardBackgroundScreen from './src/screens/BoardBackgroundScreen';
import BoardInfoScreen from './src/screens/BoardInfoScreen';
import CreateSectionScreen from './src/screens/CreateSectionScreen';
import SearchMusicScreen from './src/screens/SearchMusicScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CuratorLM">
        <Stack.Screen 
          name="CuratorDM"
          component={CuratorDarkModeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
