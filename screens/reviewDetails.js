import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function Review({ route, navigation }) {
  const { title, rating, body } = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
    </View>
  );
}
