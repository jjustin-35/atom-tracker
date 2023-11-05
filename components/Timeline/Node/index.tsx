import { Wrapper } from './styled';

type Props = {
  isNewItem: boolean;
  title: string;
};

const Node = ({ isNewItem, title }: Props) => {
  return <Wrapper isNewItem={isNewItem}>{title}</Wrapper>;
};

export default Node;
