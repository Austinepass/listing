import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function AccountListItem({image, text}) {
    return (
       <View style={styles.container}>
           <Image source={image}/>
           <Text>{text}</Text>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: 'row',
    },
})
export default AccountListItem;