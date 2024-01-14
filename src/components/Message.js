import { View, StyleSheet, Text } from "react-native";
export default function Message({ message }) {
  return (
    <View
      style={[
        styles.message,
        {
          marginLeft: message.role === "user" ? "auto" : 0,
          backgroundColor: message.role === "user" ? "#10A37F" : "#536967",
        },
      ]}
    >
      <Text style={styles.messageText}>{message.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: "gainsboro",
    padding: 13,
    borderRadius: 25,
    width: "80%",
  },
  messageText: {
    color: "white",
  },
});
