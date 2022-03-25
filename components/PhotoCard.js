import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'

const PhotoCard = (props) => {
  const navigation = useNavigation()
  const { source, user, author} = props
  const openFullPhoto = () => {
    navigation.navigate('Full', {
      source
    })
  }
  return(
    <View style={styles.card}>
      <TouchableOpacity onPress={openFullPhoto}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: source
          }}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{user.name.toUpperCase()}</Text>
      <Text style={styles.text}>{author.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#e1f5fe',
    height: 300,
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10
  },
  image: {
    marginTop: 20,
    marginLeft: '2%',
    width: '98%',
    height: '80%',
    padding: 0,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    position: 'relative',
    left: '2%',
    bottom: '25%',
    color: '#93aab5'
  }
})

export default PhotoCard