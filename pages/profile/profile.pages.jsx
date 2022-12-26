import { View, Text, StyleSheet } from "react-native";
import MyRequestSvg from "../../images/profile.images/myRequests.icon";
import MySettingsSvg from "../../images/profile.images/mySettings.icon";
import {
  ProfileName,
  PersonButton,
  Logout,
} from "../../components/exportComponents";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfilePage = ({ setIsSiggnedIn, navigation: { navigate } }) => {
  const navigateClosedApplications = () => {
    navigate("closedApplications");
  };
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <ProfileName />
        <View>
          <PersonButton
            func={navigateClosedApplications}
            ButtonIcon={MyRequestSvg}
            text={"Выполненные заявки"}
          />
          <PersonButton ButtonIcon={MySettingsSvg} text={"Настройки"} />
          <Logout setIsSiggnedIn={setIsSiggnedIn} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
