import React from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function Review({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Text>Review screen</Text>
      <Button title="Back to home screen" onPress={pressHandler} />
    </View>
  );
}
