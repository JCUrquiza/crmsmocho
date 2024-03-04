import type { Metadata } from 'next';
import { quicksand } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "ORM System",
  description: "Created by JC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
