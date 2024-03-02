import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dyaipayan Ghosh',
  description: 'Fullstack Developer | MERN | Next.js | AWS | DevOps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="h-[100vh-6rem]">{children}</div>
        </div>
      </body>
    </html>
  );
}
