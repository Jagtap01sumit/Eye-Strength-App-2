import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigator from "../drawer/DrawerNavigator";

export default function Parent() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
