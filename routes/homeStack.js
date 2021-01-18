import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import Home from "../screens/home";
import Review from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{
      headerStyle: { backgroundColor: "#eee", height: 75 },
      headerTintColor: "#333",
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="Home" />,
        headerBackground: () => (
          <Image
            source={require("../assets/game_bg.png")}
            style={{ height: "100%" }}
          />
        ),
      }}
    />
    <Screen name="Review" component={Review} options={{ title: "Revieww" }} />
  </Navigator>
);

export default HomeStack;
