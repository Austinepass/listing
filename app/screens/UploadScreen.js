import React, { useRef, useState } from "react";
import { View, StyleSheet, Modal, Image, Button, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
    const [modal, setModal] = useState(visible)
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <Image source={require('../assets/don.png')} style={{width: 50, height: 50, margin: 8}}/>
                    </TouchableOpacity>
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	animation: {
		width: 150,
	},
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
});

export default UploadScreen;
