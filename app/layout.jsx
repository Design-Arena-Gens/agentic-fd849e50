import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '???? | ?????',
  description: '???????????????????',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '???? | ?????',
    description: '???????????????????',
    url: 'https://agentic-fd849e50.vercel.app',
    siteName: '????',
    images: [
      { url: '/og-cover.png', width: 1200, height: 630, alt: '????' },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
