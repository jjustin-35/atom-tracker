import { AppBar, Typography, IconButton, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import Link from '../Link';
import { Container } from '@/constants/styles';
import { BrandWrapper, Brand, Logo, Toolbar, ButtonGroup } from './styled';
import { HeaderDataType, BrandType } from './data';

type NavBrandProps = {
  brand: BrandType;
};

type NavBarProps = {
  toggleDrawer: (boolean: boolean) => void;
  isOpen: boolean;
  isMobile?: boolean;
  data: HeaderDataType;
};

const NavBrand = ({ brand }: NavBrandProps) => (
  <BrandWrapper>
    <Link href="/">
      <Brand>
        <Logo {...brand.logo} />
        <Typography variant="h6" color="#ffffff">
          {brand.text}
        </Typography>
      </Brand>
    </Link>
  </BrandWrapper>
);

const NavBar = ({ toggleDrawer, data, isOpen, isMobile }: NavBarProps) => (
  <AppBar position="sticky">
    <Container>
      <Toolbar>
        {isMobile && (
          <IconButton color="inherit" onClick={() => toggleDrawer(!isOpen)}>
            <MenuIcon />
          </IconButton>
        )}
        {data.brand && <NavBrand brand={data.brand} />}
        <ButtonGroup>
          {!isMobile && data.buttons?.map((item, idx) => (
            <Button {...item} key={idx}>
              <Typography variant="body1" color="#ffffff">
                {item.text}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
