import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CuratorDarkModeScreen from './src/screens/CuratorDarkModeScreen';

const navigator = createStackNavigator(
  {
    CuratorDM: CuratorDarkModeScreen
  },
  {
    initialRouteName: 'CuratorDM',
    defaultNavigationOptions: {
      title: 'MoodBeat',
    },
  }
);
export default createAppContainer(navigator);
