import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LoginChecker } from "../../utils/loginPage/loginChecker.utils";

export const LoginContainer = ({ setIsSiggnedIn }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorContent, setErrContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Вход</Text>
      <TextInput
        onChangeText={setLoginValue}
        style={styles.loginInput}
        placeholder="Введите логин"
      ></TextInput>
      <TextInput
        onChangeText={setPasswordValue}
        style={styles.passwordInput}
        placeholder="Введите пароль"
      ></TextInput>
      <Text style={styles.errorText}>{errorContent}</Text>
      <TouchableOpacity
        onPress={() => {
          LoginChecker(
            loginValue,
            passwordValue,
            setErrContent,
            setIsSiggnedIn
          );
        }}
        activeOpacity={0.8}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#313131",
    height: 42,
    fontWeight: "bold",
    fontSize: 36,
  },
  loginInput: {
    borderRadius: 4,
    width: 300,
    height: 40,
    marginTop: 30,
    marginBottom: 25,
    fontSize: 15,
    backgroundColor: "#EEEEEE",
    padding: 10,
  },
  passwordInput: {
    borderRadius: 4,
    width: 300,
    height: 40,
    marginBottom: 11,
    fontSize: 15,
    backgroundColor: "#EEEEEE",
    padding: 10,
  },
  errorText: {
    width: 300,
    color: "#FF0000",
    marginBottom: 10,
    height: 15,
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: "#2A95C9",
    height: 40,
    width: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
