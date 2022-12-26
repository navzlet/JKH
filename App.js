import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { LoginPage } from "./pages/exportPages.pages";
import { AppTabs } from "./navigation/appTabs";

export default function App() {
  const [isSiggnedIn, setIsSiggnedIn] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <NavigationContainer>
        {isSiggnedIn ? (
          <AppTabs setIsSiggnedIn={setIsSiggnedIn} />
        ) : (
          <View style={styles.container}>
            <LoginPage setIsSiggnedIn={setIsSiggnedIn} />
          </View>
        )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F1F2F6",
  },
});
