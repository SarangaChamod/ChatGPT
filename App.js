import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/SplashScreen/SplashScreen.js'; 


export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161515',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
