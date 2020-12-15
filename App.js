import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("nicolas");
  const [person, setPerson] = useState({
    name: "Mario",
    age: 40,
  });

  const pressHandler = () => {
    setName("martin");
    setPerson((p) => ({ ...p, age: p.age + 1 }));
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} - age: {person.age}
      </Text>
      <View styles={styles.buttonContainer}>
        <Button title="update name" onPress={pressHandler} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
