import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

export default class DrawerContainer extends React.Component {

  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('screen1')}
          style={styles.drawerText}>
          PINEAPPLE
        </Text>
        <Text
          onPress={() => navigation.navigate('screen2')}
          style={styles.drawerText}>
          STRAWBERRY
        </Text>
        <Text
          onPress={() => navigation.navigate('screen3')}
          style={styles.drawerText}>
          RASPBERRY
        </Text>
        <Text
          onPress={this.logout}
          style={styles.drawerText}>
          <Ionicons name="ios-settings" size={28} style={{paddingRight: 12}} />
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  drawerText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'rgb(153,153,153)',
    padding: 8,
    margin: 5,
    textAlign: 'left'
  }
})
