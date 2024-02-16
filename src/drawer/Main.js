import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNavigation from "../bottom/BottomNavigation";



export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({});
