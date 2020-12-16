import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // by default, <View /> has display: flex
  container: {
    // with flex: 1, children will take all the space also
    // flex: 1,
    // default is flexDirection: "column"; flexDirection = main axis
    flexDirection: "row",
    // position in main axis
    justifyContent: "center",
    // position in cross axis
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 3,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 15,
  },
});
