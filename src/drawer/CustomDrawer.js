import { StyleSheet, Text, View, Image, Animated } from "react-native";
import React, { useRef, useState } from "react";
import {
  TouchableOpacity,
  GestureHandlerRootView,
  FlatList,
} from "react-native-gesture-handler";
import Screen1 from "../bottom/Screen1";
import Main from "./Main";
import Main2 from "./Main2";
import Setting from "./Setting";

export default function CustomDrawer() {
  const menu = [
    { icon: require("../../assets/logo.jpeg"), title: "home" },
    { icon: require("../../assets/logo.jpeg"), title: "Eye Strength" },
    { icon: require("../../assets/logo.jpeg"), title: "Other" },
    { icon: require("../../assets/logo.jpeg"), title: "Setting" },
    { icon: require("../../assets/logo.jpeg"), title: "Logout" },
  ];
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const moveToRight = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    Animated.parallel([
      Animated.timing(scale, {
        toValue: showMenu ? 1 : 0.7,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(moveToRight, {
        toValue: showMenu ? 1 : 250,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* menu design  */}
      <View style={{ flex: 1, backgroundColor: "#6600ff" }}>
        <View
          style={{ width: "100", flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/logo.jpeg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              marginLeft: 10,
              marginTop: 30,
            }}
          />
          <View>
            <View style={{ marginLeft: 10, marginTop: 20 }}>
              <Text style={{ fontSize: 22, fontWeight: "800", color: "#fff" }}>
                Eye Strain
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 0.8,
                  marginTop: 3,
                  color: "#fff",
                }}
              >
                By BVCOE-IT
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <FlatList
            data={menu}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 50,
                  marginLeft: 20,
                  marginTop: 20,
                  backgroundColor:
                    selectedMenuItem === index ? "#fff" : "#6600ff",
                  borderRadius: 10,
                  alignItems: "center",
                  flexDirection: "row",
                }}
                onPress={() => setSelectedMenuItem(index)}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 20,
                    tintColor: selectedMenuItem == index ? "#000" : "#fff",
                  }}
                ></Image>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 20,
                    color: selectedMenuItem == index ? "#000" : "#fff",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* home design  */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: [{ scale: scale }, { translateX: moveToRight }],
          borderRadius: showMenu ? 15 : 0,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={toggleMenu}>
            <Image
              source={require("../../assets/logo.jpeg")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "800" }}>
            {menu[selectedMenuItem].title}
          </Text>
        </View>
        <View>
          {selectedMenuItem === 0 && <Screen1 />}
          {selectedMenuItem === 1 && <Main />}
          {selectedMenuItem === 2 && <Main2 />}
          {selectedMenuItem === 3 && <Setting />}
          {selectedMenuItem === 4 && <Screen3 />}
        </View>
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
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});