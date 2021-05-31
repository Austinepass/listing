import React, { useRef } from "react";
import { View, StyleSheet, Modal, Text, Button } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
	const modal = useRef();
	const hideModal = () => {
		modal.current.visible = false;
	};
	return (
		<Modal visible={visible} ref={modal}>
			<View style={styles.container}>
				{progress === 1 ? (
					<LottieView
						// style={styles.animation}
						autoplay
						loop
						onAnimationFinish={onDone}
						source={require("../assets/animations/done.json")}
					/>
				) : (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				)}
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
