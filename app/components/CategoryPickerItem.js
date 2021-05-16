import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

function CategoryPickerItem({item, onPress}) {
    return (
			<View style={styles.container}>
				<View style={[styles.icon, { backgroundColor: item.backgroundColor }]}>
					<MaterialCommunityIcons name={item.icon} size={80} color='white' />
                    <Text>{item.label}</Text>
				</View>
			</View>
		);
}
const styles = StyleSheet.create({
    container: {

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
})
export default CategoryPickerItem;