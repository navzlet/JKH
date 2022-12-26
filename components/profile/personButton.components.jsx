import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const PersonButton = ({ ButtonIcon, text, func }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={func}
        style={styles.container}
        activeOpacity={0.6}
      >
        <ButtonIcon style={styles.svg} />
        <Text style={styles.myReqests}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  myReqests: {
    marginLeft: 10,
  },
  svg: {
    height: 20,
    width: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    fontSize: 16,
    marginTop: 15,
    // width: 345,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
});
