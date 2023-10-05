import type { Metadata } from 'next'
import meta from '@/constants/meta'

export const metadata: Metadata = meta.default;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-tw">
      <body>{children}</body>
    </html>
  )
}
