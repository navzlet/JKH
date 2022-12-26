import { Alert } from "react-native";
let requestData = {};
let date = new Date();
export const requestEmpty = (
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
) => {
  if (
    description !== null &&
    description !== undefined &&
    description.trim() !== "" &&
    adress !== null &&
    adress !== undefined &&
    adress.trim() !== "" &&
    selectorOne !== true &&
    selectorTwo !== true
  ) {
    requestData.userRequestTypeId = selectorOne;
    requestData.userRequestPriorityId = selectorTwo;
    requestData.description = description.trim();
    requestData.address = adress.trim();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let hours = ("0" + date.getHours()).slice(-2);
    let mins = ("0" + date.getMinutes()).slice(-2);
    let secs = ("0" + date.getSeconds()).slice(-2);
    requestData.createDate = `${date.getFullYear()}.${month}.${day} ${hours}:${mins}:${secs}`;
    getTokenFromStorage(JSON.stringify(requestData));
    setShowSubmit(true);
    setDescription();
    setAdress();
    setSelectorOne(true);
    setSelectorTwo(true);
  } else if (selectorOne == true) {
    Alert.alert("Ошибка", "Выберите тип аварии", [{ text: "OK" }]);
    setShowSubmit(false);
  } else if (selectorTwo == true) {
    Alert.alert("Ошибка", "Выберите приоритет заявки", [{ text: "OK" }]);
    setShowSubmit(false);
  } else if (description == null || description.trim() == "") {
    Alert.alert("Ошибка", "Введите описание заявки", [{ text: "OK" }]);
    setShowSubmit(false);
  } else if (adress == null || adress.trim() == "") {
    Alert.alert("Ошибка", "Введите адрес заявки", [{ text: "OK" }]);
  } else {
    Alert.alert("Ошибка", "Повторите попытку", [{ text: "OK" }]);
  }
};
