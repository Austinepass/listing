import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({route}) {
  const listing = route.params
  return (
		<View>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.subtitle}>{listing.subtitle}</Text>
			</View>
			<View style={styles.userContainer}>
				<ListItem
					title='Moshi Whatever'
					subtitle='5 Listings'
					image={require("../assets/mosh.jpg")}
				/>
			</View>
		</View>
	);
}

export default ListingDetailsScreen;
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontFamily: "Avenir",
    fontSize: 24,
    fontWeight: "400",
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
  },
  view: {
    backgroundColor: "#f8f4f4",
  },
  userContainer: {
    marginVertical: 40,
  }
});
