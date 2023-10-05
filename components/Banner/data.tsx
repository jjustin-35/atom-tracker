import { ImageType } from '@/constants/types/global';

type BannerType = {
  title: string;
  desc?: string;
  image: ImageType;
};

type DataType = Record<string, BannerType>;

const data: DataType = {
  home: {
    title: 'Atom Tracker',
    desc: '紀錄生活，管理時間，掌握時間的脈動',
    image: {
      src: '/images/home/home-banner.svg',
      alt: 'img-home-banner',
    },
  },
};

export default data;