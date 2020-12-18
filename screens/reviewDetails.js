import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GlobalStyles, Images } from "../styles/global";
import Card from "../shared/card";

export default function Review({ route }) {
  const { title, rating, body } = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        {/* <Text>{rating}</Text> */}
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={Images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
