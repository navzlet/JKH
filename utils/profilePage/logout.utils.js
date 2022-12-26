import { removeValue } from "../asyncStorage/asyncStorage.utils";

export default function LogOut(setIsSiggnedIn) {
  removeValue("@token");
  setIsSiggnedIn(false);
}
