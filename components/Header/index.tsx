'use client';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import Link from '../Link';
import { Container } from '@/constants/styles';
import { Brand, Logo } from './styled';

const Header = () => {
  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <Link href="/">
            <Brand>
              <Logo src="/images/icon/ic-logo-white.svg" alt="ic-logo" />
              <Typography variant="h6" color="#ffffff">
                Atom Tracker
              </Typography>
            </Brand>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
