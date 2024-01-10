import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <View>
      <Text style={ styles.text}>MainScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    color: 'red',
    // fontFamily: 'Montserrat-Medium'
  },
  
});

export default MainScreen;