import { FieldType } from '@/constants/types/global';

type AuthFormType = {
  fields: FieldType[];
};

type DataType = Record<string, AuthFormType>;

const data: DataType = {
  signin: {
    fields: [
      {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        required: true,
      },
    ],
  },
  signup: {
    fields: [
      {
        type: 'text',
        name: 'email',
        label: 'Email',
        placeholder: 'Email',
      },
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        placeholder: 'Username',
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
      },
      {
        type: 'password',
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
      },
    ],
  },
};

export default data;
