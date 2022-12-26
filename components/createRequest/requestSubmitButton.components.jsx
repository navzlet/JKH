import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RequestSubmitButton = ({ text, color, func }) => {
  return (
    <TouchableOpacity
      onPress={func}
      activeOpacity={0.6}
      style={style.container}
    >
      <Text style={[style.text, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    height: 50,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 15,
  },
  text: {
    fontWeight: "bold",
    color: "#2A95C9",
  },
});
