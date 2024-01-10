import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image,  StatusBar  } from "react-native";
import LottieView from "lottie-react-native";


const SplashScreen = () => {
  
    useEffect(() => {
      StatusBar.setHidden(true);
      return () => {
        // Show the status bar when the component unmounts
        StatusBar.setHidden(false);
      };
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <LottieView
          autoPlay
          loop={false}
          style={{
            width: 200,
            maxWidth: 200,
            height: 200,
            marginBottom: -40,
          }}
          source={require("../../assets/Json/chatgpta.json")}
        />
        <Text style={styles.text}>ChatGPT</Text>
      </View>
      <View style={styles.bottomContent}>
        <Image
          style={styles.openai}
          source={require("../../assets/Images/openaiwa.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#161515", // Add your desired background color here
    width: "100%",
  },
  topContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 150,
  },
  bottomContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    color: "white",
    fontSize: 35,
    // fontFamily: 'Montserrat-Medium'
  },
  openai: {
    width: 100,
    height: 25,
  },
});

export default SplashScreen;
