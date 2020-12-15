import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "yoshi", key: "2" },
    { name: "mario", key: "3" },
    { name: "luigi", key: "4" },
    { name: "nicolas", key: "5" },
    { name: "todd", key: "6" },
    { name: "asdqwe", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((p) => (
          <Text style={styles.item} key={p.id}>
            {p.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
