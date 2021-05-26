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

export default function App() {
  
	return (
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator/>
      </NavigationContainer>
	)
}


const styles = StyleSheet.create({
	container: {
		//backgroundColor: colors.light,
		flex: 1,
	},
});
