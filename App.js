import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  Button,
} from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {

  return (
		<Screen>
			<ListingEditScreen/>
		</Screen>
	);
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.light,
    flex: 1,
  },
});
