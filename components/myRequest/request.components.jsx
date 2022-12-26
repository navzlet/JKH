import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

export const MyRequest = ({ data }) => {
  const [color, setColor] = useState("grey");

  if (data.userRequestPriority.priorityNumber === 1 && color !== "#FF2416") {
    setColor("#FF2416");
  }
  if (data.userRequestPriority.priorityNumber == 2 && color !== "#FF6B2C") {
    setColor("#FF6B2C");
  }
  if (data.userRequestPriority.priorityNumber == 3 && color !== "#30BE58") {
    setColor("#30BE58");
  }
  if (data.userRequestPriority.priorityNumber == 4 && color !== "#1465C3") {
    setColor("#1465C3");
  }

  return (
    <View style={style.request}>
      <>
        <View
          style={[style.priorityIndicator, { backgroundColor: color }]}
        ></View>
        <View style={style.block}>
          <Text style={style.requestID}>№{data.id}</Text>
          <Text style={style.requestType}>{data.type}</Text>
        </View>
      </>
      <View style={style.aroundBlock2}>
        <View style={style.block2}>
          <Text style={style.date}>{data.dateToCreate}</Text>
          <Text style={style.status}>{data.status}</Text>
        </View>
      </View>
    </View>
  );
};

let style = StyleSheet.create({
  request: {
    backgroundColor: "#FFFFFF",
    height: 70,
    marginTop: 2,
    display: "flex",
    flexDirection: "row",
  },
  priorityIndicator: {
    borderRadius: 100,
    width: 3,
    height: 40,
    marginTop: 15,
    marginLeft: 15,
  },
  requestID: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  requestType: {
    fontSize: 14,
    color: "#BEBEBE",
  },
  date: {
    marginBottom: 3,
    fontSize: 12,
    color: "#BEBEBE",
  },
  block: {
    display: "flex",
    marginLeft: 10,
    justifyContent: "center",
  },
  block2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  aroundBlock2: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 10,
  },
  status: {
    padding: 5,
    fontSize: 10,
    fontWeight: "500",
    color: "#FFFFFF",
    backgroundColor: "#49B4E9",
    height: 25,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
