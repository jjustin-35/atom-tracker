'use client';

import React, { useEffect } from 'react';

import type { FieldType } from '@/constants/types/field';

import Select from '../../components/Field/Select';
import TextField from '../../components/Field/TextField';

type SelectProps = FieldType & {
  type: 'select';
  options: { value: string; label: string }[];
};

type FieldProps = FieldType | SelectProps;

const Field = ({
  type,
  errors,
  isReset,
  handleFormData,
  validate,
  handleError,
  ...inputProps
}: FieldProps) => {
  const errorMessage = errors[inputProps.name];

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFormData({ [inputProps.name]: e.target.value });
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const error = validate(e.target.value);
    handleError({ [inputProps.name]: error });
    if (error) {
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
        onBlur={blurHandler}
        {...(inputProps as SelectProps)}
      />
    );
  }
  return (
    <TextField
      type={type}
      errorMessage={errorMessage}
      onChange={changeHandler}
      onBlur={blurHandler}
      {...(inputProps as FieldType)}
    />
  );
};

export default Field;
