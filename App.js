import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import stripe from 'tipsi-stripe';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import NavigationService from './src/utils/NavigationService';

import {
  AppDrawer,
  AuthStack
} from './Stacks';
import AuthLoadingScreen from './src/screens/AuthLoading';

const store = configureStore()

stripe.setOptions({
  publishableKey: "STRIPE KEY COMES HERE"
})

export const StartApp = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AppDrawer: AppDrawer,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
)

let Navigation = createAppContainer(StartApp); 

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }} />
      </Provider>
    )
  }
}