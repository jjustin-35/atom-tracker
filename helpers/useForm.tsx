import { useEffect, useState } from 'react';

import { FieldType, FormDataType } from '@/constants/types/global';

import validate from './validate';

const useForm = (
  data: FieldType[],
  onSubmit: (data: FormDataType) => void,
  isSubmitted: boolean,
) => {
  const [formData, setFormData] = useState<FormDataType>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isSubmitted) {
      setFormData({});
      setErrors({});
    }
  }, [isSubmitted]);

  const requiredFields = data.filter((field) => field.required);

  const handleFormData = (data: FormDataType) => {
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
        confirmData:
          field.name === 'confirmPassword' && (formData.password as string),
      });

      handleError(error);
      if (error[field.name]) isError = true;
    });

    if (isError) return;

    onSubmit(formData);
  };

  return {
    formData,
    errors,
    handleFormData,
    handleError,
    submitHandler,
  };
};

export default useForm;
