import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';

import { authOptions } from './api/auth/[...nextauth]/route';
import ThemeRegistry from '@/lib/ThemeProvider';
import NextAuthProvider from '@/lib/nextAuthProvider';
import meta from '@/constants/meta';

export const metadata: Metadata = meta.default;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="zh-tw">
      <body>
        <NextAuthProvider session={session}>
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
