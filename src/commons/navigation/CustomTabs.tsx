import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../modules/home/Home";
import Settings from "../../modules/settings/Settings";
import { PRIMARY, SECONDARY } from "../constants/Colors";
import { Image } from "react-native";
import { home, lupa } from "../../../assets/icons";

const Tab = createBottomTabNavigator();

export default function CustomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: PRIMARY,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Detalles"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={lupa}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: PRIMARY,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
