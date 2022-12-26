import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProfileName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Дмитрий</Text>
      <Text style={styles.position}>Должность</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    marginTop: 18,
    fontSize: 26,
  },
  position: {
    fontSize: 15,
    color: "#666666",
  },
});
