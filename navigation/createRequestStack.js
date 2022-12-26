import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateRequest } from "../pages/exportPages.pages";

const CreateRequestStack = createNativeStackNavigator();

export const CreateRequestStackScreen = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <CreateRequestStack.Navigator>
        <CreateRequestStack.Screen name="CreateRequest" options={{ title: 'Новая заявка' }}>
          {(props) => <CreateRequest {...props} />}
        </CreateRequestStack.Screen>
      </CreateRequestStack.Navigator>
    </View>
  );
}
