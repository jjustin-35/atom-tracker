import { ImageType, ButtonType } from '@/constants/types/global';

export type HeaderType = 'common';

export type BrandType = {
  logo: ImageType;
  text: string;
};

type MenuButtonType = ButtonType & {
  buttonKey: 'signin' | 'signup';
};

type ActiveDeviceType = 'mobile' | 'desktop' | 'all';

export type MenuType = {
  key: string;
  text: string;
  href?: string;
  icon?: ImageType;
  activeDevice?: ActiveDeviceType;
};

export type HeaderDataType = {
  brand: BrandType;
  menu: MenuType[];
  buttons: MenuButtonType[];
};

type DataType = Record<HeaderType, HeaderDataType>;

const data: DataType = {
  common: {
    brand: {
      logo: {
        src: '/images/icon/ic-logo-white.svg',
        alt: 'ic-logo',
      },
      text: 'Atom Tracker',
    },
    menu: [
      {
        key: 'signin',
        text: '登入',
        activeDevice: 'mobile',
      },
      {
        key: 'signup',
        text: '註冊',
        href: '/auth/signup',
        activeDevice: 'mobile',
      },
    ],
    buttons: [
      {
        buttonKey: 'signin',
        text: '登入',
        variant: 'contained',
        color: 'secondary',
      },
      {
        buttonKey: 'signup',
        text: '註冊',
        color: 'inherit',
        href: '/auth/signup',
        variant: 'outlined',
      },
    ],
  },
};

export default data;
