import React, { useState } from "react";
import {
	TextInput,
	View,
	StyleSheet,
	Platform,
	Text,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
	icon,
	PickerItemComponent = PickerItem,
	placeholder,
	numberOfColumns=1,
	items,
	selectedItem,
	onSelectItem,
}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<Text style={styles.text}>{selectedItem.label}</Text>
					) : (
						<Text style={styles.placeholder}>{placeholder}</Text>
					)}
					<MaterialCommunityIcons
						name='chevron-down'
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType='slide'>
				<Screen>
					<Button title='Close' onPress={() => setModalVisible(false)} />
					<FlatList
						numColumns={numberOfColumns}
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	placeholder: {
		color: colors.medium,
		fontSize: 18,
		flex: 1,
	},
	text: {
		flex: 1,
		fontSize: 18,
	},
	textInput: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});
export default AppPicker;
