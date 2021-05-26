import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

import Screen from '../components/Screen'
import Card from "../components/Card";

function ListingsScreen({navigation}) {
  const myCards = [
    {
      id: 1,
      image: require("../assets/jacket.jpg"),
      title: "Red jacket for sale!",
      subtitle: "$100",
    },
    {
      id: 2,
      image: require("../assets/couch.jpg"),
      title: "Couch in good condition",
      subtitle: "$1000",
    },
    
  ];
  const [cards, setCards] = useState(myCards);
  return (
		<Screen>
			<FlatList
				data={cards}
				keyExtractor={(cd) => cd.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						onPress={() => navigation.navigate("ListingsDetails", item)}
					/>
				)}
			/>
		</Screen>
	);
}

export default ListingsScreen;
