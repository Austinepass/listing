import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, Platform, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";

export default function Card({ title, subtitle, imageUrl, onPress }) {
  return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.view}>
				<Image style={styles.image} source={{uri: imageUrl}} resizeMode='center' />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{subtitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  view: {
    height: 300,
    width: 400,
    margin: 12,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 220,
    alignSelf: "center",
  },
  title: {
    marginBottom: 7,
    fontFamily: Platform.OS==='ios'?"Avenir":'Roboto',
    fontSize: 18,
    fontWeight: "400",
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "500",
  },
});
