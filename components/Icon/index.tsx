import { TimeNodeVariantType } from '@/constants/types/timenode';
import IconsData from './data';

const Icon = ({ type }: { type: TimeNodeVariantType }) => {
  const Icon = IconsData[type];
  if (!Icon) return null;
  return <Icon />;
};

export default Icon;
