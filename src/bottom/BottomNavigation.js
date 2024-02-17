import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import { AntDesign } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          //   bottom: 20,
          borderRadius: 10,
          margin: 10,
          //   padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Bottom.Screen
        name="screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="menufold" size={24} color="black" />;
          },
        }}
      ></Bottom.Screen>
      <Bottom.Screen
        name="screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="eyeo" size={24} color="black" />;
          },
        }}
      ></Bottom.Screen>
      <Bottom.Screen
        name="screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
      ></Bottom.Screen>
    </Bottom.Navigator>
  );
}

const styles = StyleSheet.create({});
