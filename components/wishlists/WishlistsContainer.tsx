import { StyleSheet } from "react-native";
import { Layout, Tab, TabView, Text } from "@ui-kitten/components";

import EditScreenInfo from "@/components/EditScreenInfo";
import { View } from "@/components/Themed";
import React from "react";
import PublicWishlists from "./PublicWishlists";

export default function WishlistsContainer() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        tabBarStyle={styles.tabBarStyle}
        indicatorStyle={styles.indicatorStyle}
      >
        <Tab title="Публичные">
          <Layout style={styles.tabContainer}>
            <PublicWishlists />
          </Layout>
        </Tab>
        <Tab title="Приватные">
          <Layout style={[styles.tabContainer, styles.emptyTab]}>
            <Text>Тут ничего нет</Text>
          </Layout>
        </Tab>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  tabContainer: {
    // height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarStyle: {
    paddingVertical: 10,
  },
  indicatorStyle: {
    height: 2,
  },
  emptyTab: {
    flex: 1,
  },
});
