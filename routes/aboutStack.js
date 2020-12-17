import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee", height: 75 },
      headerTintColor: "#333",
    }}
  >
    <Screen name="About" component={About} options={{ title: "About" }} />
  </Navigator>
);

export default AboutStack;
