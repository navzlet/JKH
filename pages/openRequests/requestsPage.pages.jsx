import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { MyRequest } from "../../components/myRequest/request.components";
import { getAllRequests } from "../../api/get.api";

export const RequestsPage = ({
  navigation: { navigate },
  navigation,
  request,
}) => {
  const [requests, setRequests] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const getTokenFromStorage = async () => {
    try {
      token = await AsyncStorage.getItem("@token");
    } catch (e) {
      console.log("ERROR: " + e);
    }
    request(token, setRequests);
  };

  React.useEffect(() => {
    const getRequests = navigation.addListener("focus", () => {
      getTokenFromStorage();
    });
    return getRequests;
  }, [navigation]);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRequests(null);
    getTokenFromStorage();
    wait().then(() => setRefreshing(false));
  }, []);

  //КОСТЫЛЬ КОТОРЫЙ НУЖНО БУДЕТ ИСПАРВИТЬ (с использованием функций асинкстораджа из /utils)
  let token;
  if (requests === null) {
    getTokenFromStorage();
  }

  return (
    <View style={style.container}>
      <ScrollView
        overScrollMode="never"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {requests !== null
          ? requests.data.map((el) => (
              <TouchableOpacity
                key={el.id}
                onPress={() => {
                  navigate("Request", {
                    id: el.id,
                  });
                }}
                activeOpacity={0.6}
              >
                <MyRequest data={el} />
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
