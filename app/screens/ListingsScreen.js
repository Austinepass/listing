import React, { useEffect, useState,  } from "react";
import { FlatList, Text, } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import MyButton from "../components/MyButton/MyButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
const {data: listings, error, loading, request: loadListings} = useApi(listingApi.getListings());

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen>
			{error && (
				<>
					<Text style={{margin: 10, fontSize: 18, alignSelf: 'center'}}>Couldn't retrieve the listings</Text>
					<MyButton text='Retry' onPress={loadListings} />
				</>
			)}
      <ActivityIndicator visible={loading}/>
			<FlatList
				data={listings}
				keyExtractor={(cd) => cd.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={"$" + item.price}
						imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
}

export default ListingsScreen;
