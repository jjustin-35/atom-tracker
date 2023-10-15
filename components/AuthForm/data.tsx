import { FieldType } from '@/constants/types/global';

type AuthFormType = {
  title: string;
  fields: FieldType[];
};

type DataType = Record<string, AuthFormType>;

const data: DataType = {
  signin: {
    title: '登入',
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
    title: '註冊',
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
