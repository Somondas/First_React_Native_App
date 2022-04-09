import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.txt}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginbtn}></View>
      <View style={styles.registerbtn}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbtn: {
    width: "100%",
    height: 70,
    backgroundColor: "lightgreen",
  },
  registerbtn: {
    width: "100%",
    height: 70,
    backgroundColor: "lightblue",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 25,
  },
  txt: {
    // fontSize: 5,
    color: "#f0f",
    // backgroundColor: "black",
    // textAlign: "center",
  },
});
export default WelcomeScreen;
