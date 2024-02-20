import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import { Layout, Tab, TabView, Text } from "@ui-kitten/components";
import React from "react";
import WishlistsContainer from "@/components/wishlists/WishlistsContainer";

export default function TabTwoScreen() {
  return <WishlistsContainer />;
}

const styles = StyleSheet.create({});
