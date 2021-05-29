import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../../config/colors";

export default function MyButton({ text, onPress, color="primary"}) {
  return (
    <TouchableOpacity
      style={[styles.view, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.buttonV}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
        borderRadius: 25,
        justifyContent: "center",
        width: "100%",
        padding: 15,
        alignItems: "center",
      }, 

 buttonV: {
    color: colors.white,
    fontSize: 18,
    alignSelf: "center",
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
