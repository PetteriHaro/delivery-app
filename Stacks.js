import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/Settings';
import ConfirmScreen from './src/screens/Confirm';
import LegalScreen from './src/screens/Legal';
import ProfileScreen from './src/screens/Profile';
import Sidedrawer from './src/screens/Sidedrawer';
import JoinDriverScreen from './src/screens/JoinDriver';
import ListScreen from './src/screens/List';

import SignupScreen from './src/screens/Auth/Signup';
import LoginScreen from './src/screens/Auth/Login';
import LogoutScreen from './src/screens/Auth/Logout';


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Confirm: ConfirmScreen,
    List: ListScreen,
    Logout: LogoutScreen
  }, {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Legal: LegalScreen
  }, {
    defaultNavigationOptions: {
      header: null
    }
  }  
)

export const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
}, {
  defaultNavigationOptions: {
    header: null
  }
}  )


export const AppDrawer = createDrawerNavigator({
  Home: HomeStack,
  Profile: ProfileScreen,
  Settings: SettingsStack,
  JoinDriver: JoinDriverScreen
}, {
  contentComponent: Sidedrawer
})
  

