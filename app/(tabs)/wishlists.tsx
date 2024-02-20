import { StyleSheet, View } from "react-native";
import WishlistsContainer from "@/components/wishlists/WishlistsContainer";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <WishlistsContainer />
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {},
});
