import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = () => {
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
          source={require("../../assets/chatgpta.json")}
        />
        <Text style={styles.text}>ChatGPT</Text>
      </View>
      <View style={styles.bottomContent}>
        <Image
          style={styles.openai}
          source={require("../../assets/openaiwa.png")}
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
  },
  openai: {
    width: 100,
    height: 25,
  },
});

export default SplashScreen;
