import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import QRScanner from "../screens/QRScanner";

const QRTabButton = ({ children, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(QRScanner);
  };

  return (
    <TouchableOpacity
      onPressIn={handlePress}
      style={{
        top: -16,
        right: 25,
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#ac2c03",
      }}
      onPress={onPress}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export default QRTabButton;
