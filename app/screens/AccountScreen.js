import React from 'react';
import { View } from 'react-native';
import AccountListItem from '../components/AccountListItem';
import ListItem from '../components/ListItem';

function AccountScreen(props) {
    return (
      <View style={styles.container}>
        //title, subtitle, image, onPress, renderRightActions
        <ListItem
          title='Mosh Hamedina'
          subtitle='moshjabuto@gmail.com'
          image={require("../assets/mosh.jpg")}
          renderRightActions={() => console.log()}
        />
        <AccountListItem 
        image={require("../assets/mosh.jpg")}
        text="My Listings" />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {

    },
})
export default AccountScreen;