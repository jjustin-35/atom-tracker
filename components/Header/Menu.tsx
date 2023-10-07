import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import useWindowSize from '@/helpers/useWindowSize';
import { breakpointsValues } from '@/constants/styles';
import { MenuWrapper } from './styled';
import { MenuType } from './data';

type MenuProps = {
  data: MenuType[];
};

const Menu = ({ data }: MenuProps) => {
  const { width: windowWidth } = useWindowSize();
  const activeDevice =
    windowWidth < breakpointsValues.md ? 'mobile' : 'desktop';
  const items = data.filter(
    (item) =>
      !item?.activeDevice ||
      item.activeDevice === activeDevice ||
      item.activeDevice === 'all',
  );
  if (items.length === 0) return null;
  return (
    <MenuWrapper>
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MenuWrapper>
  );
};

export default Menu;
