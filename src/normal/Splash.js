import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Parent");
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
      <Text>Splash</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
