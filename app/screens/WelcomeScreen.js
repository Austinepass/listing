import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import MyButton from "../components/MyButton/MyButton";

const image = {
  uri:
    "/Users/mac/Desktop/React-Native-apps/exerc/exerc/app/assets/background.jpg",
};
const logo = {
  uri:
    "/Users/mac/Desktop/React-Native-apps/exerc/exerc/app/assets/logo-red.png",
};

export default function WelcomeScreen() {
  return (
    <ImageBackground source={image} style={styles.image} blurRadius={9}>
      <View style={styles.logoContainer}>
        <Image
          source={logo}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyButton text='Login' />
      </View>
      <View style={styles.buttonContainer}>
        <MyButton text='Register' color='secondary' />
      </View>
      <StatusBar style='auto' />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    top: 100,
    position: "absolute",
    alignItems: "center",
  },
  text: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: "600",
  },
});
