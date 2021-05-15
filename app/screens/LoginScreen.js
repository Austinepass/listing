import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import MyButton from "../components/MyButton/MyButton";
import AppText from "../components/AppPicker";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<Formik
					validationSchema={validationSchema}
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}>
					{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
						<>
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
							<MyButton text='Login' onPress={handleSubmit} />
						</>
					)}
				</Formik>
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
