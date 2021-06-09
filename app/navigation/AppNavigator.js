import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	const registerForPushNotifications = async() => {
		try {
			const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS)
			if (!permissions.granted) return;

			const token = await Notifications.getExpoPushTokenAsync();
			console.log(token);
		} catch (error) {
			console.log(error);
		}
	}
	return (
	<Tab.Navigator>
		<Tab.Screen
			name='Feeds'
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='home' color={color} size={size} />
				),
			}}
		/>
		<Tab.Screen
			name={routes.LISTINGS_EDIT}
			component={ListingEditScreen}
			options={({ navigation }) => ({
				tabBarButton: () => (
					<NewListingButton
						onPress={() => navigation.navigate(routes.LISTINGS_EDIT)}
					/>
				),
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons
						name='plus-circle'
						color={color}
						size={size}
					/>
				),
			})}
		/>
		<Tab.Screen
			name={routes.ACCOUNT}
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons name='account' color={color} size={size} />
				),
			}}
		/>
	</Tab.Navigator>
);
		}

export default AppNavigator;
