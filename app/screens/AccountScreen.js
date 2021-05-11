import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AccountListItem from '../components/AccountListItem';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import colors from '../config/colors';

function AccountScreen(props) {
    return (
      <Screen>
        <View style={styles.container}>
          <ListItem
            title='Mosh Hamedina'
            subtitle='moshjabuto@gmail.com'
            image={require("../assets/mosh.jpg")}
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
          />
          <View style={{marginTop: 15}}>
          <AccountListItem
            name='logout'
            backGround='#ffe66d'
            text='Log Out'
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