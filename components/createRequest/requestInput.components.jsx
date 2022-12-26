import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export const RequestInput = ({
  text,
  placeholder,
  inputHeight,
  setStateText,
  stateText,
}) => {
  return (
    <View style={[style.container, { height: inputHeight }]}>
      <Text style={style.header}>{text}</Text>
      <TextInput
        onChangeText={(text) => setStateText(text)}
        value={stateText}
        style={[{ height: inputHeight - 70 }, style.input]}
        multiline
        numberOfLines={4}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    minHeight: 120,
    backgroundColor: "#FFFFFF",
    padding: 15,
  },
  header: {
    marginBottom: 11,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    minHeight: 50,
    textAlignVertical: "top",
    padding: 15,
    backgroundColor: "#F6F6F6",
  },
});
