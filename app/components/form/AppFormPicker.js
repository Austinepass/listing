import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";

import { useFormikContext } from "formik";

function AppFormPicker({ items, name, PickerItemComponent, placeholder }) {
	const { errors, touched, setFieldValue, values } = useFormikContext();
	return (
		<>
			<AppPicker
				items={items}
                PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				onSelectItem={(item) => setFieldValue(name, item)}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
