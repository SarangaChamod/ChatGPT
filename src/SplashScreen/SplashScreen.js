import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image,  StatusBar  } from "react-native";


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
        <Image
          style={{
            width: 200,
            maxWidth: 200,
            height: 200,
            marginBottom: -15,
          }}
          source={require("../../assets/Images/chatgpt.png")}
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
    backgroundColor: "#10A37F", 
    width: "100%",
  },
  topContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  bottomContent: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "auto",
    padding: 12
  },
  text: {
    color: "white",
    fontSize: 41,
    // fontFamily: 'Montserrat-Medium'
  },
  openai: {
    width: 125,
    height: 35,
  },
});

export default SplashScreen;
