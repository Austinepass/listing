import React from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';

function AccountListItem({name, size, color, backGround, text, onPress}) {
    return (
			<TouchableWithoutFeedback onPress={onPress}>
				<View style={styles.container}>
					<View style={[styles.icon, { backgroundColor: backGround }]}>
						<MaterialCommunityIcons name={name} size={30} color='white' />
					</View>
					<Text style={styles.text}>{text}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 10,
    },
    icon: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 35,
        marginLeft: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 35,
    },
    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: '500'
    },
})
export default AccountListItem;