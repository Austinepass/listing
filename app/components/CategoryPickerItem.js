import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

function CategoryPickerItem({item, onPress}) {
    return (
			<View style={styles.container}>
				<TouchableOpacity onPress={onPress}>
					<View
						style={[styles.icon, { backgroundColor: item.backgroundColor }]}>
						<MaterialCommunityIcons name={item.icon} size={40} color='white' />
					</View>
					<Text style={styles.text}>{item.label}</Text>
				</TouchableOpacity>
			</View>
		);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: "center",
		justifyContent: 'center',
        width:'33%',
	},
	icon: {
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.primary,
		borderRadius: 35,
	},
	text: {
		marginTop: 10,
		fontSize: 17,
		fontWeight: "500",
        textAlign:'center',
	},
});
export default CategoryPickerItem;