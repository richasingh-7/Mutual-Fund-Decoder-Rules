import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indian Mutual Fund Scheme Name Decoder',
  description: 'Decode Indian mutual fund scheme names into plain English.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
