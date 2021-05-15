import React from 'react';
import AppTextInput from "../components/AppTextInput"
import ErrorMessage from "../components/ErrorMessage"

import {useFormikContext} from 'formik'

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
    return (
			<>
				<AppTextInput
					onBlur={() => setFieldTouched("email")}
					onChangeText={handleChange("email")}
                    {...otherProps}
				/>
				<ErrorMessage error={errors[name]} visible={touched[name]} />
			</>
		);
}

export default AppFormField;