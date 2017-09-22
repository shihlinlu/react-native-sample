import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import PineappleScreen from '../Containers/PineappleScreen'
import StrawberryScreen from '../Containers/StrawberryScreen'
import RaspberryScreen from '../Containers/RaspberryScreen'
import DrawerContainer from '../Containers/DrawerContainer'
import { Ionicons } from '@expo/vector-icons'


const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = DrawerNavigator({
  screen1: { screen: PineappleScreen },
  screen2: { screen: StrawberryScreen },
  screen3: { screen: RaspberryScreen },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 3, color: 'white'}}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }><Ionicons name="md-menu" size={28} color={'white'} style={{paddingRight: 15}} /></Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'black'},
    title: 'Welcome!',
    fontWeight: 'bold',
    headerTintColor: 'white',
    letterSpacing: 1,
    gesturesEnabled: false,
    headerRight: drawerButton(navigation)
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },

}, {
  headerMode: 'none',
})

// All possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
