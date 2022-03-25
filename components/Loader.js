import React from "react";
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loader = () => {
  return(
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#42a5f5"/>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})

export default Loader