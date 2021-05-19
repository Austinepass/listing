import React from 'react';
import ErrorMessage from '../ErrorMessage'
import ImageInputList from '../ImageInputList';

function FormImagePicker(props) {
  return (
      <>
      <ImageInputList/>
      <ErrorMessage/>
      </>
  );
}

export default FormImagePicker;