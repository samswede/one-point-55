import './globals.css';
import type { Metadata } from 'next';

import client from "@/tina/__generated__/client";

import { IBM_Plex_Sans } from 'next/font/google';

import { NavBarMenu } from '@/components/shared/navbar/NavBarMenu';
import { FooterDemo } from "@/components/shared/footer/FooterDemo";


const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});


export const metadata: Metadata = {
  title: 'OnePoint55',
  description: 'Unique Vacation Experiences',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await client.queries.global({ relativePath: "Global.md"})
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        <header>
          <NavBarMenu />
        </header>
        {children}
        
        <FooterDemo />
      </body>
    </html>
  );
}
