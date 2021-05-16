import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({ title, subtitle, image, onPress, renderRightActions }) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View style={styles.texts}>
						<Text style={styles.title} numberOfLines={1}>
							{title}
						</Text>
						<Text style={styles.subtitle} numberOfLines={2}>
							{subtitle}
						</Text>
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						name='chevron-right'
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#fff",
		marginVertical: 10,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
		marginLeft: 10,
	},
	subtitle: {
		color: colors.medium,
	},
	texts: {
		marginTop: 15,
		flex: 1,
	},
	title: {
		fontWeight: "500",
	},
});
export default ListItem;
