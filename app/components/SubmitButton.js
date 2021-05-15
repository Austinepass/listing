import React from 'react';
import MyButton from './MyButton/MyButton';

import {useFormikContext} from 'formik'

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext
    return <MyButton text={title} onPress={handleSubmit} />;
}

export default SubmitButton;