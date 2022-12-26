import { View } from "react-native";
import { LoginContainer } from "../../components/exportComponents";

export const LoginPage = ({ setIsSiggnedIn }) => {
  return (
    <View>
      <LoginContainer setIsSiggnedIn={setIsSiggnedIn} />
    </View>
  );
}
