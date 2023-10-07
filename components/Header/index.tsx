'use client';

import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';
import NavBar from './NavBar';
import Menu from './Menu';
import dataset, { HeaderType } from './data';

type HeaderProps = {
  type: HeaderType;
};

const Header = ({ type = 'common' }: HeaderProps) => {
  const data = dataset[type];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (boolean: boolean) => {
    setIsOpen(boolean);
  };
  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} isOpen={isOpen} brand={data.brand} />
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <Menu data={data.menu} />
      </SwipeableDrawer>
    </>
  );
};

export default Header;
