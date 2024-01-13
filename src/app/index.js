import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Message from "../components/Message";

const MainScreen = () => {
  const [message, sendMessage] = useState([
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Hello" },
    { role: "assistant", content: "Hello there, how can I help you" },
  ]);

  const [prompt, setPrompt] = useState("");
  const onSend = () => {
    // console.warn('Send :', prompt);

    sendMessage((existingMessage) => [
      ...existingMessage,
      { role: "user", content: prompt },
    ]);

    setPrompt(''); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={message}
        contentContainerStyle={{ gap: 5, padding: 10 }}
        renderItem={({ item }) => <Message message={item} />}
      />

      <View style={styles.footer}>
        <TextInput
          value={prompt}
          onChangeText={setPrompt}
          placeholder="How can I help you ?"
          style={styles.textinput}
        />

        <View style={{ marginRight: 5 }} />
        <TouchableOpacity onPress={onSend} style={styles.send}>
          <Text style={styles.send_text}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#283033",
  },

  textinput: {
    borderRadius: 50,
    backgroundColor: "#536967",
    padding: 8,
    flex: 1,
  },
  send: {
    borderRadius: 100,
    backgroundColor: "#10A37F",
    padding: 13,
    // margin: 2,
  },
  send_text: {
    color: "white",
  },
  message: {
    backgroundColor: "gainsboro",
    padding: 13,
    borderRadius: 25,
    width: "80%",
  },
  messageText: {
    color: "white",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#38454B",
  },
});

export default MainScreen;
