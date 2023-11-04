import { Wrapper } from './styled';

type Props = {
  isNewItem: boolean;
  content: string;
};

const Node = ({ isNewItem, content }: Props) => {
  return <Wrapper isNewItem={isNewItem}>{content}</Wrapper>;
};

export default Node;
