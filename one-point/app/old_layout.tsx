import './globals.css';
import type { Metadata } from 'next';

// Post Hog
import { Providers } from './providers'
import dynamic from 'next/dynamic'

// TinaCMS
import client from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

// Fonts
import { IBM_Plex_Sans, Playfair_Display } from 'next/font/google';

// Components
import { NavBarMenu } from '@/components/shared/navbar/NavBarMenu';
import { FooterDemo } from "@/components/shared/footer/FooterDemo";

import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: 'OnePoint55',
  description: 'Unique Vacation Experiences',
};
//Badnerstrasse 853, 8048 Zürich, Switzerland


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

const playfairDisplay = Playfair_Display({
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
  
  /*
  // Use TinaCMS data
  const { data } = useTina({
    data: result?.data,
    query: result?.query,
    variables: result?.variables,
  });
  */

  //{cn(playfairDisplay.className, `${result?.data?.global?.theme}`)}
  return (
    <html lang="en">
      <Providers>
        
          <body className={`${result?.data?.global?.theme}`}>
            <div className={cn(playfairDisplay.className)}>
              <PostHogPageView /> 

              <header>
                <NavBarMenu />
              </header>
              
              <main>
                {children}
              </main>
              
              <footer>
                <FooterDemo />
              </footer>

            </div>
          </body>
        
      </Providers>
    </html>
  );
}
