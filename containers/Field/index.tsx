'use client';

import React, { useEffect } from 'react';

import type { TextFieldType, SelectType } from '@/constants/types/global';

import validate from '@/helpers/validate';
import { isEmptyObj } from '@/helpers/object';
import Select from '../../components/Field/Select';
import TextField from '../../components/Field/TextField';

type FieldProps = TextFieldType | SelectType;

const Field = ({
  type,
  errors,
  isReset,
  handleFormData,
  handleError,
  ...inputProps
}: FieldProps) => {
  const errorMessage = errors[inputProps.name];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFormData({ [inputProps.name]: e.target.value });
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldData = { name: inputProps.name, value: e.target.value };
    const error = validate({
      fieldData,
      type,
      isRequired: inputProps.required,
    });

    handleError(error);
    if (isEmptyObj(error)) {
      handleFormData({ [inputProps.name]: '' });
    }
  };

  const resetHandler = () => {
    handleFormData({ [inputProps.name]: '' });
    handleError({ [inputProps.name]: '' });
  };

  useEffect(() => {
    if (isReset) {
      resetHandler();
    }
  }, [isReset]);

  if (type === 'select') {
    return (
      <Select
        type={type}
        errorMessage={errorMessage}
        onChange={changeHandler}
        inputProps={{
          onBlur: blurHandler,
        }}
        {...(inputProps as SelectType)}
      />
    );
  }
  return (
    <TextField
      type={type}
      errorMessage={errorMessage}
      onChange={changeHandler}
      inputProps={{
        onBlur: blurHandler,
      }}
      {...(inputProps as TextFieldType)}
    />
  );
};

export default Field;
