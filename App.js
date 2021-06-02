import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from './app/screens/WelcomeScreen'
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import {AppLoading} from 'expo-app-loading'
export default function App() {
	const [user, setUser] = useState();
	const [isReady, setIsReady] = useState(false)
	const restoreUser = async () => {
		const user = await authStorage.getUser()
		if (user) setUser(user);
	};

	useEffect(() => {
		restoreUser();
	}, [])

	//if (!isReady) 
		//return <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)}/>
  
	return (
		<AuthContext.Provider value={{user, setUser}}>
		<OfflineNotice/>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
		</AuthContext.Provider>
	)
}


const styles = StyleSheet.create({
	container: {
		//backgroundColor: colors.light,
		flex: 1,
	},
});
