import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import QRScanner from "../screens/QRScanner";
import IdList from "../screens/IdList";
import QRTabButton from "../components/QRTabButton";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: -10,
          left: 0,
          right: 0,
          elevation: 5,
          borderRadius: 25,
          height: 100,
          backgroundColor: "#FFF",
          shadowColor: "#000000",
          shadowOffset: { width: 0, top: -50 },
          shadowOpacity: 0.9,
          shadowRadius: 4,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                right: 25,
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../../assets/img/png/home.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  marginBottom: 2,
                  tintColor: focused ? "#4BEC00" : "#000",
                }}
              />
              <Text
                style={{
                  color: focused ? "#4BEC00" : "#000",
                  fontSize: 12,
                }}
              >
                Ana Sayfa
              </Text>
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    height: 4, // Height of the underline
                    backgroundColor: "#4BEC00", // Color of the underline
                    bottom: -10, // Position the line at the bottom of the icon
                    left: 10, // Padding from the left side
                    right: 10, // Padding from the right side
                    borderRadius: 2, // Optional: if you want rounded corners
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Kimlik Listesi"
        component={IdList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                right: 45,
                alignItems: "center",
                justifyContent: "center",
                top: 0,
              }}
            >
              <Image
                source={require("../../assets/img/png/id.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  marginBottom: 2,
                  tintColor: focused ? "#4BEC00" : "#000",
                }}
              />
              <Text
                style={{
                  color: focused ? "#4BEC00" : "#000",
                  fontSize: 12,
                }}
              >
                Kimlik Listesi
              </Text>
              {focused && (
                <View
                  style={{
                    position: "absolute",
                    height: 4, // Height of the underline
                    backgroundColor: "#4BEC00", // Color of the underline
                    bottom: -10, // Position the line at the bottom of the icon
                    left: 10, // Padding from the left side
                    right: 10, // Padding from the right side
                    borderRadius: 2, // Optional: if you want rounded corners
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="QRScanner"
        component={QRScanner}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/img/png/qr.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <QRTabButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
