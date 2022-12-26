import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SelectDownIcon from "../../images/profile.images/requestSelectDown.icon";

export const RequestSelect = ({
  text,
  list,
  setSelectClear,
  selectClear,
  setSelectorAnyValue,
}) => {
  const [selectHide, setSelectHide] = useState(true);
  const [selectValue, setSelectValue] = useState("выберите");
  if (selectClear) {
    selectValue !== "выберите" ? setSelectValue("выберите") : null;
    setSelectClear(false);
  }

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        activeOpacity={0.6}
        onPress={() => {
          selectHide ? setSelectHide(false) : setSelectHide(true);
        }}
      >
        <View>
          <Text style={style.textProps}>{text}</Text>
          <Text style={style.textStatic}>{selectValue}</Text>
        </View>
        <SelectDownIcon
          style={
            !selectHide
              ? [style.downIcon, { transform: [{ rotate: "180deg" }] }]
              : style.downIcon
          }
        />
      </TouchableOpacity>
      <View style={selectHide ? style.hidden : null}>
        {list.map((val) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectorAnyValue(val.id);
                setSelectValue(val.value);
                setSelectHide(true);
              }}
              key={val.id}
              style={style.dropDown}
              activeOpacity={0.4}
            >
              <Text>{val.value}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  textProps: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textStatic: {
    color: "#C3C5CA",
    fontSize: 13,
  },
  downIcon: {
    marginTop: 12,
    marginRight: 30,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    paddingLeft: 15,
    height: 55,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
  },
  dropDown: {
    marginTop: 1,
    padding: 10,
    minHeight: 38,
    backgroundColor: "#FFFFFF",
  },
  hidden: {
    display: "none",
  },
});
