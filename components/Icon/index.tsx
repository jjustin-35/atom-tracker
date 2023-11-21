import { TimeNodeVariantType } from '@/constants/types/timenode';
import IconsData from './data';

const Icon = ({
  type,
  color,
  size,
}: {
  type: TimeNodeVariantType;
  color?: string;
  size?: { width: string; height: string };
}) => {
  const Icon = IconsData[type];
  if (!Icon) return null;
  return <Icon sx={{ color, ...size }} />;
};

export default Icon;
