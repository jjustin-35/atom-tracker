import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MenuWrapper } from './styled';
import { MenuType } from './data';

type MenuProps = {
  data: MenuType[];
};

const Menu = ({ data }: MenuProps) => {
  return (
    <MenuWrapper>
      <List>
        {data.map((item) => (
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
