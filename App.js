import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState('Category');
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.light,
    flex: 1,
  },
});
