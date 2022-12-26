import axios from "axios";

const serverURL = "http://10.3.21.206:8080";

export const loginRequest = (data, saveData, setIsSiggnedIn, setErrContent) => {
  axios
    .post(`${serverURL}/api/v1/auth/login`, data)
    .then((response) => saveData("@token", response.data.token))
    .then(() => setIsSiggnedIn(true))
    .catch(() => setErrContent("Неверные логин или пароль"))
    .catch((error) => console.log(error));
};

export const createApplication = (token, data) => {
  axios.post(`${serverURL}/api/v1/requests`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
