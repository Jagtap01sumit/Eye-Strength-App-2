import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/AppNavigator";
import CustomDrawer from "./src/drawer/CustomDrawer";

export default function App() {
  return (
    <>
      {/* <AppNavigator /> */}
      <CustomDrawer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});