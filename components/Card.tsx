import { Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "./context";
import { Wish } from "./wishlists/types";
import { getImage } from "./getImage";

type Props = { title: string; description: string; backgroundColor: string; wishes: Wish[] };

export default function Card({ title, description, backgroundColor, wishes }: Props) {
  const { updateImage } = useAppContext();

  function handleSelectImage(image: string) {
    // router.replace("/modal");
    updateImage(image);
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>

      <FlatList
        data={wishes}
        horizontal
        renderItem={({ item }) =>
          item.isEmpty === false ? (
            <Link href="/modal" asChild>
              <TouchableOpacity onPress={() => handleSelectImage(item.image)}>
                {getImage(item.image, [styles.imageIconCommon, styles.image])}
              </TouchableOpacity>
            </Link>
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
    gap: 10,
    width: "100%",
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
