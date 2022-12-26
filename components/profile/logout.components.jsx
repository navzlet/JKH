import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LogOut from "../../utils/profilePage/logout.utils";

export const Logout = ({ setIsSiggnedIn }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={() => {
          LogOut(setIsSiggnedIn);
        }}
      >
        <Text style={{ color: "red" }}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    fontSize: 16,
    marginTop: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
  },
});
