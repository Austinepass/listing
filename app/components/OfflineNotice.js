import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import colors from "../config/colors";
import {useNetInfo} from '@react-native-community/netinfo'

function OfflineNotice(props) {
    const netInfo = useNetInfo();
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
	return (
		<View style={styles.container}>
			<Text style={{ margin: 10, fontSize: 18, color: 'white' }}>
				No Internet Connection
			</Text>
		</View>
	);
    }
    return null
}

const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
		backgroundColor: colors.primary,
		height: 50,
        justifyContent: 'center',
		position: "absolute",
        width: '100%',
        top: 44,
        zIndex: 1,
	},
});

export default OfflineNotice;
