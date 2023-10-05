type MetaType = {
  title: string;
  description: string;
  ogImage: string;
  url: string;
  canonical: string;
  icon?: string;
};

type DataType = Record<string, MetaType>;

const meta: DataType = {
  default: {
    title: 'Atom Tracker',
    description: '協助追蹤每段時間做的事情，幫助你重新掌握時間',
    ogImage: '',
    url: '',
    canonical: '',
    icon: '',
  },
};

export default meta;
