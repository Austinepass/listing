import React, {useContext, useState} from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";

import authStorage from '../auth/storage'
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	const [loginFailed, setLoginFailed] = useState(false);
	const authContext = useContext(AuthContext)

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		const user = jwtDecode(result.data)
		authContext.setUser(user)
		authStorage.storeToken(result.data)
	};
	return (
		<Screen>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<AppForm
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					onSubmit={handleSubmit}>
					<ErrorMessage
						error='Invalid email and/or password'
						visible={loginFailed}
					/>
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
