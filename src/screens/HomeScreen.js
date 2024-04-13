import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";
import AttachedDocs from "../components/attachedDocs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ac2c03" barStyle="light-content" />
      <Text style={styles.title}>Hoş Geldiniz</Text>
      <View style={styles.line} />
      <AttachedDocs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "left",
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: "#e8ecf4",
  },
  title: {
    fontSize: 19,
    paddingBottom: 15,
  },
});

export default HomeScreen;
