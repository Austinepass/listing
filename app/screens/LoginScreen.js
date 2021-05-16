import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import {AppForm, AppFormField, SubmitButton} from '../components/form'

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<AppForm
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						name='email'
						keyboardType='email-address'
						placeholder='Email'
						textContentType='emailAddress'
					/>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='lock'
						name='password'
						placeholder='Password'
						secureTextEntry={true}
						textContentType='password'
					/>
					<SubmitButton title='Login' />
				</AppForm>
			</View>
		</Screen>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});
export default LoginScreen;
