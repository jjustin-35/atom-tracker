import { useState } from 'react';

import { FieldType } from '@/constants/types/global';

import validate from './validate';
import { isEmptyObj } from './object';


const useForm = (data: FieldType[], onSubmit?: (data: Record<string, string | number>) => void) => {
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isReset, setIsReset] = useState(false);

  const requiredFields = data.filter((field) => field.required);

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

    onSubmit(formData);
  };

  return {
    errors,
    isReset,
    handleFormData,
    handleError,
    submitHandler,
  };
};

export default useForm;
