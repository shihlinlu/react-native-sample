import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class RaspberryScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/raspberry-pi.png')}
                        style={styles.image}>
                    </Image>
                </View>
                <View style={styles.container}>
                    <Text>Raspberry Screen</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        resizeMode: 'contain',
        flex: 1,
        alignItems: 'center',
  },
})