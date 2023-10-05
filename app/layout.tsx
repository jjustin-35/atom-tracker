import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';

import meta from '@/constants/meta';
import { theme } from '@/constants/styles';

export const metadata: Metadata = meta.default;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
