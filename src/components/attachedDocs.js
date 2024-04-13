import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AttachedDocs = () => {
  return (
    <View>
      <Text style={styles.title}>Eklenen Belgelerim</Text>
      <View style={styles.walletContainer}>
        <Image
          source={require("../../assets/img/png/wallet-red.png")}
          resizeMode="contain"
          style={styles.wallet}
        />
        <Text style={styles.textWallet}>Cüzdanınız Boş</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 13,
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#e8ecf4",
  },
  wallet: {
    marginLeft: 30,
  },
  textWallet: {
    marginLeft: 20,
  },
});

export default AttachedDocs;
