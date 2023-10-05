export type ImageType = {
  src: string;
  alt: string;
};

export type LinkType = {
  href: string;
  target?: '_blank' | '_self';
  isExternal?: boolean;
  underline?: 'none' | 'hover' | 'always';
};
