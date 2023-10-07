import { AppBar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import Link from '../Link';
import { Container } from '@/constants/styles';
import { BrandWrapper, Brand, Logo, Toolbar } from './styled';
import { BrandType } from './data';

type NavBrandProps = {
  brand: BrandType;
};

type NavBarProps = {
  toggleDrawer: (boolean: boolean) => void;
  isOpen: boolean;
  brand?: BrandType;
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

const NavBar = ({ toggleDrawer, isOpen, brand }: NavBarProps) => (
  <AppBar position="sticky">
    <Container>
      <Toolbar>
        <IconButton color="inherit" onClick={() => toggleDrawer(!isOpen)}>
          <MenuIcon />
        </IconButton>
        {brand && <NavBrand brand={brand} />}
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
