import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ImageList from '../screens/ImageList'
import FullPhoto from './FullPhoto'

const Stack = createNativeStackNavigator()

const Navigation = () => {  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Gallery" component={ImageList}/>
        <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Full" component={FullPhoto}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation