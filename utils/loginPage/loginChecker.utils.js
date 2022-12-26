import { saveData } from "../asyncStorage/asyncStorage.utils";
import { loginRequest } from "../../api/post.api";

let loginData = { login: "", password: "" };

export const LoginChecker = (
  loginValue,
  passwordValue,
  setErrContent,
  setIsSiggnedIn
) => {
  if (loginValue.toString().length === 0) {
    setErrContent("Ошибка с логином");
  } else if (passwordValue.toString().length === 0) {
    setErrContent("Ошибка с паролем");
  } else {
    setErrContent("");
    loginData.login = loginValue;
    loginData.password = passwordValue;
    loginRequest(loginData, saveData, setIsSiggnedIn, setErrContent);
  }
};
