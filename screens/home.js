import React from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Review");
    // navigation.push("Review");
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home screen</Text>
      <Button title="Go to Review Details" onPress={pressHandler} />
    </View>
  );
}
