const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/;

type ValidateType = {
  fieldData: Record<string, string | number>;
  type: string;
  isRequired: boolean;
  confirmData?: string;
};

const validate = ({ fieldData, type, isRequired, confirmData }: ValidateType) => {
  const { name, value } = fieldData;

  if (!isRequired) return { [name]: '' };
  if (!value) {
    return { [name]: 'Required' };
  }
  if (type === 'email' && !emailRegex.test(value.toString())) {
    return { [name]: 'Invalid email' };
  }
  if (name === 'confirmPassword' && value !== confirmData) {
    return { [name]: 'Password does not match' };
  }
  if (type === 'password' && !passwordRegex.test(value.toString())) {
    return {
      [name]:
        'Invalid password, password must have at least eight characters, one uppercase letter and one lowercase letter',
    };
  }
  return { [name]: '' };
};

export default validate;
