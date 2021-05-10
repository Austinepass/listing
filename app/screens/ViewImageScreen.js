import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import{MaterialCommunityIcons} from '@expo/vector-icons'
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name='close'
        color='white'
        size='35'
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name='trash-can-outline'
        color='white'
        size='35'
      />
      <Image
        resizeMode='contain'
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode='contain'
      />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  closeIcon: {
    top: 60,
    left: 30,
    position: "absolute",
  },
  deleteIcon: {
    top: 60,
    right: 30,
    position: "absolute",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
