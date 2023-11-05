import { FieldType, ButtonType } from '@/constants/types/global';
import { TimeNodeVariantType } from '@/constants/types/timenode';

type IconType = {
  type: TimeNodeVariantType;
  title: string;
};

type DataType = {
  title: string;
  fields: FieldType[];
  icons: IconType[];
  button: ButtonType;
};

const data: DataType = {
  title: '編輯紀錄',
  fields: [
    {
      name: 'title',
      placeholder: '請輸入要記錄的事項',
      required: true,
      type: 'text',
    },
  ],
  icons: [
    {
      type: 'food',
      title: '食物',
    },
    {
      type: 'work',
      title: '工作',
    },
    {
      type: 'sports',
      title: '運動',
    },
    {
      type: 'game',
      title: '娛樂',
    },
    {
      type: 'life',
      title: '生活',
    },
    {
      type: 'others',
      title: '其他',
    },
  ],
  button: {
    text: '儲存',
  }
};

export default data;
