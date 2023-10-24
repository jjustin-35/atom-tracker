import { AppBar, Typography, IconButton, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { FeatureType } from '@/constants/types/features';
import { signIn } from 'next-auth/react';
import Link from '../Link';
import { Container } from '@/constants/styles';
import { BrandWrapper, Brand, Logo, Toolbar, ButtonGroup } from './styled';
import { appNavTitle, HeaderDataType, TitleType } from './data';

type NavTitleProps = {
  title: TitleType;
};

type NavBarProps = {
  toggleDrawer: (boolean: boolean) => void;
  variant?: FeatureType;
  isOpen: boolean;
  isMobile?: boolean;
  data: HeaderDataType;
};

const NavTitle = ({ title }: NavTitleProps) => (
  <BrandWrapper>
    <Link href="/">
      <Brand>
        {title.logo && <Logo {...title.logo} />}
        <Typography variant="h6" color="#ffffff">
          {title.text}
        </Typography>
      </Brand>
    </Link>
  </BrandWrapper>
);

const NavBar = ({ toggleDrawer, variant, data, isOpen }: NavBarProps) => {
  const title = appNavTitle[variant] || data.title;

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
          {title && <NavTitle title={title} />}
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
