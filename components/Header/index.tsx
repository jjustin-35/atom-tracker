'use client';

import { useState } from 'react';
import { SwipeableDrawer } from '@mui/material';

import useWindowSize from '@/helpers/useWindowSize';
import { breakpointsValues } from '@/constants/styles';
import NavBar from './NavBar';
import Menu from './Menu';
import dataset, { HeaderType } from './data';

type HeaderProps = {
  type?: HeaderType;
};

const Header = ({ type = 'common' }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const data = dataset[type];
  if (!data) return null;

  const isMobile = windowWidth < breakpointsValues.md;

  const toggleDrawer = (boolean: boolean) => {
    setIsOpen(boolean);
  };
  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} data={data} isOpen={isOpen} isMobile={isMobile} />
      {isMobile && (
        <SwipeableDrawer
          anchor="left"
          open={isOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <Menu data={data.menu} />
        </SwipeableDrawer>
      )}
    </>
  );
};

export default Header;
