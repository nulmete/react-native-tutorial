import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "nicolas", id: "5" },
    { name: "todd", id: "6" },
    { name: "asdqwe", id: "7" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        // look for 'id' prop instead of 'key'
        keyExtractor={(item) => item.id}
        data={people}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map((p) => (
          <Text style={styles.item} key={p.id}>
            {p.name}
          </Text>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10,
  },
});
