import { Metadata } from 'next';

type DataType = Record<string, Metadata>;

const meta: DataType = {
  default: {
    title: 'Atom Tracker',
    description: '協助追蹤每段時間做的事情，幫助你重新掌握時間',
    icons: {
      icon: '/images/icon/ic-logo.svg',
    },
  },
};

export default meta;
