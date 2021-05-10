import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../config/colors'

function ListItemSeparator(props) {
    return (
       <View style={styles.view}/>
    );
}
const styles = StyleSheet.create({
   view: {
       width: '100%',
       height: 1,
       backgroundColor: Colors.light
   } 
})
export default ListItemSeparator;