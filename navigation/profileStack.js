import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfilePage, RequestsPage, Request } from "../pages/exportPages.pages";
import { getByClosedStatus } from "../api/get.api";

const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen = ({ setIsSiggnedIn }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" options={{ title: "Профиль" }}>
          {(props) => (
            <ProfilePage {...props} setIsSiggnedIn={setIsSiggnedIn} />
          )}
        </ProfileStack.Screen>
        <ProfileStack.Screen
          name="closedApplications"
          options={{ title: "Выполненные заявки" }}
        >
          {(props) => <RequestsPage {...props} request={getByClosedStatus} />}
        </ProfileStack.Screen>
        <ProfileStack.Screen name="Request" options={{ title: "Заявка" }}>
          {(props) => <Request {...props} />}
        </ProfileStack.Screen>
      </ProfileStack.Navigator>
    </View>
  );
};
