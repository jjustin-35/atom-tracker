import { ImageType, ButtonType } from '@/constants/types/global';

export type HeaderType = 'common';

export type BrandType = {
  logo: ImageType;
  text: string;
};

type ActiveDeviceType = 'mobile' | 'desktop' | 'all';

export type MenuType = {
  text: string;
  href: string;
  icon?: ImageType;
  activeDevice?: ActiveDeviceType;
};

export type HeaderDataType = {
  brand: BrandType;
  menu: MenuType[];
  buttons: ButtonType[];
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
        text: '登入',
        href: '/auth/login',
        activeDevice: 'mobile',
      },
      {
        text: '註冊',
        href: '/auth/register',
        activeDevice: 'mobile',
      },
    ],
    buttons: [
      {
        text: '登入',
        href: '/auth/login',
        variant: 'contained',
        color: 'secondary',
      },
      {
        text: '註冊',
        href: '/auth/register',
        color: 'inherit',
        variant: 'outlined',
      },
    ],
  },
};

export default data;
