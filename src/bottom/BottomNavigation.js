import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BottomNavigation() {
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("Logout");
        }}
      >
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "20%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.jpeg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
