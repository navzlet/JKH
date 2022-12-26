import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  ProfileIcon,
  NewRequestIcon,
  CommunicationsIcon,
} from "../assets/exportAssets.assets";
import {
  ProfileStackScreen,
  CreateRequestStackScreen,
  RequestsStackScreen,
} from "./exportStacks";

const Tab = createMaterialBottomTabNavigator();

export const AppTabs = ({ setIsSiggnedIn }) => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#ffffff" }}
      shifting={true}
      activeColor="#2A95C9"
      inactiveColor="#BEBFC3"
    >
      <Tab.Screen
        name="profile"
        title="Профиль"
        options={{
          title: "Профиль",
          tabBarIcon: ({ color }) => (
            <ProfileIcon name="profile" color={color} />
          ),
        }}
      >
        {(props) => (
          <ProfileStackScreen {...props} setIsSiggnedIn={setIsSiggnedIn} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="newrequest"
        options={{
          title: "Новая заявка",
          tabBarIcon: ({ color }) => (
            <NewRequestIcon name="newrequest" color={color} />
          ),
        }}
      >
        {(props) => <CreateRequestStackScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="RequestsScreen"
        options={{
          title: "Заявки",
          tabBarIcon: ({ color }) => <CommunicationsIcon color={color} />,
        }}
      >
        {(props) => <RequestsStackScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
