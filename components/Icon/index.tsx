import IconsData, { IconsType } from './data';

const Icon = ({ type }: { type: IconsType }) => {
  const Icon = IconsData[type];
  if (!Icon) return null;
  return <Icon />;
};

export default Icon;
