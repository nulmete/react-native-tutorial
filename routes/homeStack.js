import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Review from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee", height: 75 },
      headerTintColor: "#333",
    }}
  >
    <Screen name="Home" component={Home} options={{ title: "Home" }} />
    <Screen name="Review" component={Review} options={{ title: "Review" }} />
  </Navigator>
);

export default HomeStack;
