import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Setting() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "column",
        paddingTop: 7,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: "black",
          marginTop: 22,
        }}
      >
        Setting
      </Text>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 4,
          width: "100%",
          fontSize: 16,
          fontWeight: "bold",
          color: "white",
          whiteSpace: "nowrap",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 2,
            backgroundColor: "#",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Profile
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Profile
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#F87171",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Contact Info
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#F87171",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Password
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#F87171",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Notification
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#F87171",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              paddingLeft: 12,
            }}
          >
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 8,
            paddingVertical: 24,
            marginTop: 12,
            backgroundColor: "#F87171",
            borderRadius: 10,
            marginEnd: 20,
            marginBottom: 12,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Logout");
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                paddingLeft: 12,
              }}
            >
              Log Out
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
