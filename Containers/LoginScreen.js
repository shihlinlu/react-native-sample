import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Image source={require('../assets/images/pineapple-ocean.jpg')} style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('drawerStack')}
        >
            <Text
                style={styles.buttonText}
            >
                LOGIN
            </Text>

        </TouchableOpacity>

        <Text
          style={styles.signupText}
        >
          SIGN UP
        </Text>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: null,
    width: null,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    bottom: 80,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(0,174,239)',
    position: 'absolute',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    left: 70,
    letterSpacing: 1.5,
  },
  signupText: {
      fontSize: 17,
      letterSpacing: 1.5,
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      paddingTop: 10,
      position: 'absolute',
      height: 40,
      bottom: 30,
  }
})
