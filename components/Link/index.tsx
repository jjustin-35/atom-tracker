import NextLink from 'next/link';
import { Link as MuiLink } from '@mui/material';

import { LinkType } from '@/constants/types/global';

type LinkProps = LinkType & {
  children: React.ReactNode;
};

const Link = ({
  href,
  target,
  isExternal = false,
  underline = 'none',
  children,
}: LinkProps) => {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const component = isExternal ? 'a' : NextLink;
  const linkTarget = isExternal ? target : undefined;
  return (
    <MuiLink
      href={href}
      component={component}
      target={linkTarget}
      rel={rel}
      underline={underline}
      color="inherit"
    >
      {children}
    </MuiLink>
  );
};

export default Link;
