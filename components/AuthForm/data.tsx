import { FieldType } from '@/constants/types/global';

type HintType = {
  text: string;
  link?: string;
};

export type FormType = {
  title: string;
  fields: FieldType[];
  hint?: HintType[];
};

type DataType = Record<string, FormType>;

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
    hint: [
      {
        text: '忘記密碼?',
        link: '',
      },
      {
        text: '還沒有帳號?',
        link: '/auth/signup',
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
        required: true,
      },
      {
        type: 'text',
        name: 'name',
        label: 'Username',
        placeholder: 'Username',
        required: true,
      },
      {
        type: 'password',
        name: 'password',
        label: 'Password',
        placeholder: 'Password',
        required: true,
      },
      {
        type: 'password',
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        required: true,
      },
    ],
    hint: [
      {
        text: '已經有帳號?',
        link: '/auth/signin',
      },
    ],
  },
};

export default data;
