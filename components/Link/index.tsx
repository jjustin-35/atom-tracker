import NextLink from 'next/link';
import { Link as MuiLink } from '@mui/material';

import { LinkType } from '@/constants/types/global';

type LinkProps = LinkType & {
  children: React.ReactNode;
};

const Link = ({
  href,
  target,
  isExternal,
  underline = 'none',
  children,
}: LinkProps) => {
  if (isExternal) {
    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
    return (
      <MuiLink href={href} target={target} rel={rel} underline={underline}>
        {children}
      </MuiLink>
    );
  }
  return (
    <NextLink href={href} legacyBehavior>
      <MuiLink underline={underline}>{children}</MuiLink>
    </NextLink>
  );
};

export default Link;
