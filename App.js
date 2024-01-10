// App.js

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/MainScreen/MainScreen'; // Import your main screen component
import SplashScreen from './src/SplashScreen/SplashScreen';


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true); // Set isLoaded to true after the timeout
    }, 3000); 
  }, []);

  return (
    <View style={styles.container}>
      {isLoaded ? <MainScreen /> : <SplashScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
