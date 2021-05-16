import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton } from '../components/form';
import * as Yup from 'yup'
import Screen from '../components/Screen';
import AppFormPicker from '../components/form/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';


const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(1000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
});

const categories = [
	{ label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
	{ label: "Clothing", value: 2, backgroundColor: "red", icon: "apps" },
	{ label: "Camera", value: 3, backgroundColor: "red", icon: "apps" },
];

function ListingEditScreen(props) {
    return (
			<Screen>
				<View style={styles.container}>
					<AppForm
						validationSchema={validationSchema}
						initialValues={{ title: '', price: '', category: null, description: '' }}
						onSubmit={(values) => console.log(values)}>
						<AppFormField
							autoCapitalize='none'
							autoCorrect={false}
                            maxLength={250}
							name='title'
							placeholder='Title'
						/>
						<AppFormField
							keyboardType='numeric'
							maxLength={8}
							name='price'
							placeholder='Price'
						/>
						<AppFormPicker
							items={categories}
							name='category'
                            PickerItemComponent={CategoryPickerItem}
							placeholder='Category'
						/>
						<AppFormField
							maxLength={255}
							multiline
                            numberOfLines={3}
							name='description'
							placeholder='Description'
						/>
						<SubmitButton title='Post' />
					</AppForm>
				</View>
			</Screen>
		);
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default ListingEditScreen;