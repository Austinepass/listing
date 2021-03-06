import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import AccountListItem from '../components/AccountListItem';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import colors from '../config/colors';
import routes from "../navigation/routes";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

function AccountScreen({navigation}) {
  const {user, logOut} = useAuth();

    return (
      <Screen>
        <View style={styles.container}>
          <ListItem
            title={user.name}
            subtitle={user.email}
            image={require("../assets/aust.jpeg")}
            renderRightActions={() => console.log()}
          />
          <AccountListItem
            name='format-list-bulleted'
            backGround={colors.primary}
            text='My Listings'
          />
          <AccountListItem
            name='email'
            backGround={colors.secondary}
            text='My Messages'
            onPress={() => navigation.navigate(routes.MESSAGES)}
          />
          <View style={{marginTop: 15}}>
          <AccountListItem
            name='logout'
            backGround='#ffe66d'
            text='Log Out'
            onPress={() => logOut()}
          />
          </View>
        </View>
      </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
    },
})
export default AccountScreen;