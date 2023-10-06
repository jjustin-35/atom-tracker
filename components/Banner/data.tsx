import { ImageType, ButtonType } from '@/constants/types/global';

type BannerType = {
  title: string;
  desc?: string;
  image: ImageType;
  button: ButtonType;
};

type DataType = Record<string, BannerType>;

const data: DataType = {
  home: {
    title: 'Atom Tracker',
    desc: '紀錄生活，管理時間，掌握時間的脈動',
    image: {
      src: '/images/home/img-home-banner.svg',
      alt: 'img-home-banner',
    },
    button: {
      variant: 'contained',
      color: 'primary',
      href: '/login',
      text: '開始使用',
    },
  },
};

export default data;
