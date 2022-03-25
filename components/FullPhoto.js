import React from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'

const FullPhoto = ({route, navigation}) => {

  const goBack = () => navigation.goBack()

  return(
    <View style={styles.container}>
      <ImageBackground
        style={styles.fullPhoto}
        source={{
          uri: route.params.source
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={goBack}
        delayPressIn={0}
        pressDuration={0.8}
        >
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    width: '100%',
    height: '100%'
  },
  fullPhoto: {
    height: '100%',
    width: '100%'
  },
  button: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 20,
    top: 30
  },
  buttonText: {
    color: '#424242',
    fontSize: 45
  }
})

export default FullPhoto