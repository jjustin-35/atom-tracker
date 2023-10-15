'use client';

import { useState } from 'react';
import type { FieldType } from '@/constants/types/global';
import validate from '@/helpers/validate';
import { isEmptyObj } from '@/helpers/object';

type DataType = {
  fields: FieldType[];
};

export type FormComponentProps = {
  errors: Record<string, string>;
  isReset: boolean;
  data: DataType;
  handleFormData: (data: Record<string, string | number>) => void;
  handleError: (data: Record<string, string>) => void;
};

type FormProps = {
  data: DataType;
  FormComponent: React.FC<FormComponentProps>;
};

const Form = ({ data, FormComponent }: FormProps) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isReset, setIsReset] = useState(false);

  const requiredFields = data.fields.filter((field) => field.required);

  const handleFormData = (data: Record<string, string | number>) => {
    setFormData({ ...formData, ...data });
  };

  const handleError = (data: Record<string, string>) => {
    setErrors({ ...errors, ...data });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate
    let isError = false;

    requiredFields.map((field) => {
      const fieldData = { name: field.name, value: formData[field.name] };
      const error = validate({
        fieldData,
        type: field.type,
        isRequired: field.required,
      });

      handleError(error);
      if (!isEmptyObj(error)) isError = true;
    });

    if (isError) return;
  };

  return (
    <form onSubmit={submitHandler}>
      <FormComponent
        errors={errors}
        isReset={isReset}
        data={data}
        handleFormData={handleFormData}
        handleError={handleError}
      />
    </form>
  );
};

export default Form;
