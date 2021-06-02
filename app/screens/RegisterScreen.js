import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet, View } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Screen from "../components/Screen";
import userApi from "../api/register";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";
import ErrorMessage from "../components/ErrorMessage";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	name: Yup.string().required().label("Name"),
	password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
	const auth = useAuth();
	const [error, setError] = useState();
	const regiterApi = useApi(userApi.register);
	const loginApi = useApi(authApi.login);

	const handleSubmit = async (userInfo) => {
		const result = await regiterApi.request(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error)
			else {
				setError("An Unexpected error occured.");
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		);
		auth.logIn(authToken);
	};
	return (
		<Screen>
			<View style={styles.container}>
				<ActivityIndicator visible={regiterApi.loading || loginApi.loading}/>
				<AppForm
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "", name: "" }}
					onSubmit={handleSubmit}>
					<ErrorMessage error={error} visible={error} />
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='account'
						name='name'
						placeholder='Name'
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
					<SubmitButton title='Register' />
				</AppForm>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
