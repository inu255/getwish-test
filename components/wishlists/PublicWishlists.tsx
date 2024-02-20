import React from "react";
import Card from "../Card";
import { View } from "../Themed";
import { FlatList } from "react-native";

const mockData = [
  {
    key: "1",
    name: "🎄 Новый год",
    description: "7 желаний",
    backgroundColor: "#ebffda",
    wishes: [
      { key: "1", isEmpty: false, image: "sweater" },
      {
        key: "2",
        isEmpty: false,
        image: "speaker",
      },
      {
        key: "3",
        isEmpty: false,
        image: "kinder",
      },
      {
        key: "4",
        isEmpty: true,
        image: "",
      },
    ],
  },
  {
    key: "2",
    name: "🎁 День Рождения",
    description: "3 желания",
    backgroundColor: "#ffebd4",
    wishes: [
      { key: "1", isEmpty: false, image: "sweater" },
      {
        key: "2",
        isEmpty: false,
        image: "speaker",
      },
      {
        key: "3",
        isEmpty: false,
        image: "kinder",
      },
      {
        key: "4",
        isEmpty: true,
        image: "",
      },
    ],
  },
  {
    key: "3",
    name: "💐 8 марта",
    description: "0 желаний",
    backgroundColor: "#e1fdff",
    wishes: [
      { key: "1", isEmpty: true, image: "" },
      {
        key: "2",
        isEmpty: true,
        image: "",
      },
      {
        key: "3",
        isEmpty: true,
        image: "",
      },
      {
        key: "4",
        isEmpty: true,
        image: "",
      },
    ],
  },
  {
    key: "4",
    name: "💐 14 февраля",
    description: "0 желаний",
    backgroundColor: "#fde0f4",
    wishes: [
      { key: "1", isEmpty: true, image: "" },
      {
        key: "2",
        isEmpty: true,
        image: "",
      },
      {
        key: "3",
        isEmpty: true,
        image: "",
      },
      {
        key: "4",
        isEmpty: true,
        image: "",
      },
    ],
  },
];

export default function PublicWishlists() {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            description={item.description}
            backgroundColor={item.backgroundColor}
            wishes={item.wishes}
          />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
