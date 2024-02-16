import './globals.css';
import type { Metadata } from 'next';

// Post Hog
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

// TinaCMS
import client from "@/tina/__generated__/client";

// Fonts
import { IBM_Plex_Sans } from 'next/font/google';

// Components
import { NavBarMenu } from '@/components/shared/navbar/NavBarMenu';
import { FooterDemo } from "@/components/shared/footer/FooterDemo";



export const metadata: Metadata = {
  title: 'OnePoint55',
  description: 'Unique Vacation Experiences',
};


// Post Hog
const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})


// Fonts
const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch tinaCMS data
  const result = await client.queries.global({ relativePath: "Global.md"})

  return (
    <html lang="en">
      <PHProvider>
        <body className={ibmPlexSans.className}>

          <PostHogPageView /> 

          <header>
            <NavBarMenu />
          </header>
          {children}
          
          <FooterDemo />
        </body>
      </PHProvider>
    </html>
  );
}
