import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee", height: 75 },
      headerTintColor: "#333",
    }}
  >
    <Screen
      name="About"
      component={About}
      options={{
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={{ height: "100%" }}
          />
        ),
      }}
    />
  </Navigator>
);

export default AboutStack;
