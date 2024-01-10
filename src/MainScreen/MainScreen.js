import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const MainScreen = () => {
  const onSend = () => {
    console.warn("Send");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footer}>
        <TextInput placeholder="How can I help you" style={styles.textinput} />
        <View style={{ marginRight: 8 }} />
        <TouchableOpacity onPress={onSend} style={styles.send}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  textinput: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#10A37F",
    padding: 8,
    flex: 1,
  },
  send: {
    borderRadius: 100,
    backgroundColor: "#10A37F",
    padding: 13,
    // margin: 2,
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 10,
  },
});

export default MainScreen;
