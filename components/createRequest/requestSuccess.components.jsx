import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RequestSuccessCheck from "../../images/profile.images/requestSuccessCheck.icon";

export const RequestSuccess = ({ func }) => {
  return (
    <View style={style.container}>
      <View style={style.circle}>
        <RequestSuccessCheck />
      </View>
      <Text style={{ marginTop: 20, color: "#5B5B5B" }}>
        Заявка успешно создана!
      </Text>
      <TouchableOpacity onPress={func} style={style.button} activeOpacity={0.6}>
        <Text style={{ color: "#2A95C9" }}>вернуться</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#2A95C9",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#2A95C9",
    color: "#2A95C9",
    height: 30,
    width: 100,
    marginTop: 45,
  },
});
