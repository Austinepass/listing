import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = ({navigation}) => {
	return (
		<Screen>
			<Text>Tweets</Text>
      <Button title='View Tweets' onPress={() => navigation.navigate('TweetDetails', {id: 1, leg: 'Have'})}/>
		</Screen>
	);
};

const TweetDetails = ({route}) => {
	return (
		<Screen>
			<Text>Tweets Details {route.id} {route.params.id} {route.params.leg}</Text>
		</Screen>
	);
};
const Stack = createStackNavigator()
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor:'white',
		}}>
		<Stack.Screen
			name='Tweets'
			component={Tweets}
			options={{
				headerStyle: { backgroundColor: "tomato" },
			}}
		/>
		<Stack.Screen
			name='TweetDetails'
			component={TweetDetails}
			options={({ route }) => ({ title: route.params.leg })}
		/>
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		//backgroundColor: colors.light,
		flex: 1,
	},
});
