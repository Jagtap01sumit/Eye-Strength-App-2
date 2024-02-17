import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Parent from "./normal/Parent";
import Logout from "./src/drawer/Logout";
import CustomDrawer from "./src/drawer/CustomDrawer";
import LoginScreen from "./src/normal/LoginScreen";
import RegisterScreen from "./src/normal/Register";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="CustomDrawer"
          component={CustomDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
