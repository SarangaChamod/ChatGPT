// App.js

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/MainScreen/MainScreen'; // Import your main screen component
import SplashScreen from './src/SplashScreen/SplashScreen';


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulating an asynchronous task (e.g., fetching data, loading resources)
    // You may want to replace this with your actual loading logic.
    setTimeout(() => {
      setIsLoaded(true); // Set isLoaded to true after the timeout
    }, 3000); // Replace 3000 with the duration of your splash screen
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
