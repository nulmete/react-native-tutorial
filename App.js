import React from "react";
import { Text } from "react-native";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import AppNavigator from "./routes/drawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>font not loaded</Text>;
  }

  return <AppNavigator />;
}
