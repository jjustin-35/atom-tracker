import { AppBar, Typography, IconButton, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { signIn } from 'next-auth/react';
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

const NavBar = ({ toggleDrawer, data, isOpen, isMobile }: NavBarProps) => {
  const authHandler = (type?: 'signin' | 'signup') => {
    if (type !== 'signin') return;
    signIn();
  };
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => toggleDrawer(!isOpen)}
            sx={{
              display: {
                md: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {data.brand && <NavBrand brand={data.brand} />}
          <ButtonGroup>
            {data.buttons?.map((item, idx) => {
              const { buttonKey, ...rest } = item;
              return (
                <Button
                  {...rest}
                  key={idx}
                  onClick={() => authHandler(buttonKey)}
                >
                  {item.text}
                </Button>
              );
            })}
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
