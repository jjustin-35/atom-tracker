import { ImageType, ButtonType } from '@/constants/types/global';
import { FeatureType } from '@/constants/types/features';

export type HeaderType = 'common' | 'app';

export type TitleType = {
  logo?: ImageType;
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
  title: TitleType;
  menu: MenuType[];
  buttons?: MenuButtonType[];
};

type DataType = Record<HeaderType, HeaderDataType>;

export const appNavTitle: Record<FeatureType, TitleType> = {
  dashboard: {
    text: '時間表',
  },
  analysis: {
    text: '圖表分析',
  },
  schedule: {
    text: '時程安排',
  },
  account: {
    text: '帳號管理',
  },
};

const data: DataType = {
  common: {
    title: {
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
  app: {
    title: {
      text: '時間表',
    },
    menu: [
      {
        key: 'dashboard',
        text: '時間表',
        href: '/dashboard',
      },
      {
        key: 'analysis',
        text: '圖表分析',
        href: '/analysis',
      },
      {
        key: 'schedule',
        text: '時程安排',
        href: '/schedule',
      },
      {
        key: 'account',
        text: '帳號管理',
        href: '/account',
      },
      {
        key: 'logout',
        text: '登出',
        href: '/auth/signin',
      },
    ],
  },
};

export default data;
