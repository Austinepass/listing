import React from 'react';
import * as Yup from "yup";
import { StyleSheet, View } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/form';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	name: Yup.string().required().label("Name"),
	password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
    return (
			<Screen>
				<View style={styles.container}>
					<AppForm
						validationSchema={validationSchema}
						initialValues={{ email: "", password: "", name: "" }}
						onSubmit={(values) => console.log(values)}>
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