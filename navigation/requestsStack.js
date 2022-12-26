import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RequestsPage, Request } from "../pages/exportPages.pages";
import { getAllRequests } from "../api/get.api";

const RequestsStack = createNativeStackNavigator();

export const RequestsStackScreen = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <RequestsStack.Navigator>
        <RequestsStack.Screen
          name="RequestsPage"
          options={{ title: "Открытые заявки" }}
        >
          {(props) => <RequestsPage {...props} request={getAllRequests} />}
        </RequestsStack.Screen>
        <RequestsStack.Screen name="Request" options={{ title: "Заявка" }}>
          {(props) => <Request {...props} />}
        </RequestsStack.Screen>
      </RequestsStack.Navigator>
    </View>
  );
};
