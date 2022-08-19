import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../modules/home/Home";
import Settings from "../../modules/settings/Settings";

const Tab = createBottomTabNavigator();

export default function CustomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
