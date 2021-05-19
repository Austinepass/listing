import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  Button,
} from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  //const [category, setCategory] = useState('Category');
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }
  const handleDelete = uri => {
		setImageUris(imageUris.filter(imageUri => imageUri !== uri));
	};

  return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				//onAddImage={(uri) => handleAdd(uri)}
				onAddImage={handleAdd}
        onRemoveImage={handleDelete}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.light,
    flex: 1,
  },
});
