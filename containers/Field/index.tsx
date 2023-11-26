'use client';

import React, { useEffect, useState } from 'react';

import type { TextFieldType, SelectType } from '@/constants/types/global';

import validate from '@/helpers/validate';
import { isEmptyObj } from '@/helpers/object';
import Select from '../../components/Field/Select';
import TextField from '../../components/Field/TextField';

type FieldProps = TextFieldType | SelectType;

const Field = ({
  type,
  value,
  errors,
  isReset,
  confirmData,
  handleFormData,
  handleError,
  ...inputProps
}: FieldProps) => {
  const errorMessage = errors[inputProps.name];
  const [fieldValue, setValue] = useState<string | number>(value || '');

  useEffect(() => {
    if (isReset) {
      resetHandler();
    }
  }, [isReset]);

  useEffect(() => {
    if (value !== 0 && !value) return;
    setValue(value);
  }, [value]);

  useEffect(() => {
    if (fieldValue) {
      handleFormData({ [inputProps.name]: fieldValue });
    }
  }, [fieldValue]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const fieldData = { name: inputProps.name, value: e.target.value };
    const error = validate({
      fieldData,
      type,
      isRequired: inputProps.required,
      confirmData: inputProps.name === 'confirmPassword' && confirmData,
    });

    handleError(error);
    if (isEmptyObj(error)) {
      handleFormData({ [inputProps.name]: '' });
    }
  };

  const resetHandler = () => {
    handleFormData({ [inputProps.name]: '' });
    handleError({ [inputProps.name]: '' });
    setValue('');
  };

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
      value={fieldValue}
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
