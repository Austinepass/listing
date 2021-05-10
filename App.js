import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Platform, SafeAreaView } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MyButton from "./app/components/MyButton/MyButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AccountScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
