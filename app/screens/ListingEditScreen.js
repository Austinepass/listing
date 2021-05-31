import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormPicker from "../components/form/AppFormPicker";
import listingApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/form/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";


const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(1000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "Please select atleast one image").label("Images"),
});

const categories = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3,
	},
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

function ListingEditScreen(props) {
	const location = useLocation();
	const [uploadVisible, setUploadVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing) => {
		setProgress(0);
		setUploadVisible(true);
		const response = await listingApi.addListing(
			{ ...listing, location },
			(progress) => {
				setProgress(progress);
				console.log(progress);
			}
		);
		if (!response.ok) {
			setUploadVisible(false);
			return alert("Could not save the listing");
		}
	};
	return (
		<Screen>
			<View style={styles.container}>
				<UploadScreen
					onDone={() => setUploadVisible(false)}
					progress={progress}
					visible={uploadVisible}
				/>
				<AppForm
					validationSchema={validationSchema}
					initialValues={{
						title: "",
						price: "",
						category: null,
						description: "",
						images: [],
					}}
					onSubmit={handleSubmit}>
					<FormImagePicker name='images' />
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
						numberOfColumns={3}
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
	},
});

export default ListingEditScreen;
