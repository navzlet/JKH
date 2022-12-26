import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  RequestSuccess,
  RequestInput,
  RequestSelect,
  RequestSubmitButton,
} from "../../components/exportComponents";
import { requestEmpty } from "../../utils/requestPage/requestEmpty.utils.js";
import { createApplication } from "../../api/post.api";
import { getTypes, getPriorities } from "../../api/get.api";

export const CreateRequest = () => {
  const [showSubmit, setShowSubmit] = useState(false);
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [selectClear, setSelectClear] = useState(false);
  const [selectorOne, setSelectorOne] = useState(true);
  const [selectorTwo, setSelectorTwo] = useState(true);
  const [types, setTypes] = useState(null);
  const [priorities, setPriorities] = useState(null);

  const getTokenFromStorage = async (data) => {
    let token;
    try {
      token = await AsyncStorage.getItem("@token");
    } catch (e) {
      console.log("ERROR: " + e);
    }
    createApplication(token, data);
  };

  const getRequestData = async () => {
    let token;
    try {
      token = await AsyncStorage.getItem("@token");
    } catch (e) {
      console.log("ERROR: " + e);
    }
    if (types == null) {
      getTypes(token, setTypes);
    }
    if (priorities == null) {
      getPriorities(token, setPriorities);
    }
  };
  getRequestData();

  function sumbit() {
    requestEmpty(
      setDescription,
      setAdress,
      description,
      adress,
      setShowSubmit,
      selectorOne,
      selectorTwo,
      setSelectorOne,
      setSelectorTwo,
      getTokenFromStorage
    );
  }

  function reject() {
    setSelectorOne(true);
    setSelectorTwo(true);
    setDescription();
    setAdress();
    setSelectClear(true);
  }

  function getBack() {
    setShowSubmit(false);
  }

  if (showSubmit) {
    return (
      <>
        <RequestSuccess func={getBack} />
      </>
    );
  } else {
    if (types == null || priorities == null) {
      return <View></View>;
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView overScrollMode="never">
          <View style={style.scroll}>
            <RequestSelect
              setSelectClear={setSelectClear}
              selectClear={selectClear}
              list={types}
              text={"Тип аварии"}
              setSelectorAnyValue={setSelectorOne}
            />
            <RequestSelect
              setSelectClear={setSelectClear}
              selectClear={selectClear}
              list={priorities}
              text={"Приоритет"}
              setSelectorAnyValue={setSelectorTwo}
            />
            <RequestInput
              stateText={description}
              setStateText={setDescription}
              text={"Описание"}
              placeholder={"Введите описание заявки..."}
              inputHeight={223}
            />
            <RequestInput
              stateText={adress}
              setStateText={setAdress}
              text={"Адрес"}
              placeholder={"Введите адрес заявки..."}
              inputHeight={105}
            />
            <RequestSubmitButton
              func={sumbit}
              text={"Создать"}
              color={"#2A95C9"}
            />
            <RequestSubmitButton
              func={reject}
              text={"Отмена"}
              color={"#EC5959"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  scroll: {
    marginBottom: 100,
    flex: 1,
  },
});
