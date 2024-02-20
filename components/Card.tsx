import React from "react";
import { FlatList, StyleSheet, Text, View, Image, Platform } from "react-native";
import { Wish } from "./wishlists/types";
import { Octicons } from "@expo/vector-icons";

function getImage(url: string) {
  if (url === "sweater") {
    return (
      <Image
        source={require("@/assets/images/sweater.jpg")}
        resizeMode="contain"
        style={[styles.imageIconCommon, styles.image]}
      />
    );
  } else if (url === "speaker") {
    return (
      <Image
        source={require("@/assets/images/speaker.jpeg")}
        resizeMode="contain"
        style={[styles.imageIconCommon, styles.image]}
      />
    );
  }
  if (url === "kinder") {
    return (
      <Image
        source={require("@/assets/images/kinder.jpg")}
        resizeMode="contain"
        style={[styles.imageIconCommon, styles.image]}
      />
    );
  }
}

type Props = { title: string; description: string; backgroundColor: string; wishes: Wish[] };

export default function Card({ title, description, backgroundColor, wishes }: Props) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>

      <FlatList
        data={wishes}
        horizontal
        renderItem={({ item }) =>
          item.isEmpty === false ? (
            <View>{getImage(item.image)}</View>
          ) : (
            <View style={[styles.imageIconCommon, styles.iconContainer]}>
              <Octicons name="gift" size={24} color="silver" style={styles.icon} />
            </View>
          )
        }
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    marginVertical: 7,
    marginHorizontal: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#222c50",
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.13,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardTitle: {
    alignSelf: "flex-start",
    fontWeight: "500",
    fontSize: 16,
  },
  cardDescription: {
    alignSelf: "flex-start",
    fontSize: 12,
    opacity: 0.5,
    marginTop: 5,
  },
  imageContainer: {
    marginTop: 15,
    // flexDirection: "row",
    gap: 10,
    // justifyContent: "space-between",
    // alignItems: "center",
    width: "100%",
    // aspectRatio: 1,
  },
  imageIconCommon: {
    height: 75,
    aspectRatio: 1,
  },
  image: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  iconContainer: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "silver",
    borderStyle: "dashed",
    justifyContent: "space-between",
    alignItems: "center",
    padding: -30,
  },
  icon: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
