import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getRequest } from "../../api/get.api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Request = ({ route }) => {
  const [request, setRequest] = useState(null);

  //КОСТЫЛЬ КОТОРЫЙ НУЖНО БУДЕТ ИСПАРВИТЬ (с использованием функций асинкстораджа из /utils)
  let token;
  if (request === null) {
    const getTokenFromStorage = async () => {
      try {
        token = await AsyncStorage.getItem("@token");
      } catch (e) {
        console.log("ERROR: " + e);
      }
      getRequest(token, setRequest, route.params.id);
    };
    getTokenFromStorage();
  }
  const [color, setColor] = useState("grey");
  if (request !== null) {
    if (
      request.userRequestPriority.priorityNumber === 1 &&
      color !== "#FF2416"
    ) {
      setColor("#FF2416");
    }
    if (
      request.userRequestPriority.priorityNumber == 2 &&
      color !== "#FF6B2C"
    ) {
      setColor("#FF6B2C");
    }
    if (
      request.userRequestPriority.priorityNumber == 3 &&
      color !== "#30BE58"
    ) {
      setColor("#30BE58");
    }
    if (
      request.userRequestPriority.priorityNumber == 4 &&
      color !== "#1465C3"
    ) {
      setColor("#1465C3");
    }
  }
  return (
    <>
      {request !== null ? (
        <ScrollView style={style.scroll} overScrollMode="never">
          <View style={style.container}>
            <Text style={style.id}>№ {request.id}</Text>
            <Text style={style.type}>{request.userRequestType.value}</Text>

            <Text style={[style.priority, { backgroundColor: color }]}>
              {request.userRequestPriority.value}
            </Text>

            <Text style={style.date}>{request.dateToCreate}</Text>

            <Text style={style.descriptionHeader}>Описание</Text>
            <Text style={style.descriptionText}>{request.description}</Text>
            <Text style={style.showDescription}>Развернуть</Text>
            <Text style={style.addressHeader}>Адрес</Text>
            <Text style={style.addressText}>{request.address}</Text>
          </View>
        </ScrollView>
      ) : null}
    </>
  );
};

const style = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  id: {
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 25,
  },
  type: {
    fontWeight: "500",
    fontSize: 20,
    marginTop: 10,
  },
  priority: {
    textTransform: "lowercase",
    marginTop: 10,
    alignSelf: "flex-start",
    fontWeight: "600",
    color: "#FFFFFF",
    borderRadius: 4,
    padding: 5,
    paddingTop: 4,
    fontSize: 12,
  },
  date: {
    marginTop: 10,
    color: "#C6C6C6",
    fontSize: 13,
  },
  descriptionHeader: {
    marginTop: 25,
    color: "#232930",
    fontWeight: "500",
    fontSize: 20,
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
  },
  showDescription: {
    marginTop: 3,
    fontSize: 13,
    color: "#A8A8A8",
  },
  addressHeader: {
    marginTop: 20,
    color: "#232930",
    fontWeight: "500",
    fontSize: 20,
  },
  addressText: {
    marginTop: 10,
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
  },
});
