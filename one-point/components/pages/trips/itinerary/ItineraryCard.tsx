import React from 'react';

import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Badge } from "@/components/ui/badge"

import PresetColorCircle from "@/components/svg/circle/PresetColorCircle"


type ItineraryCardProps = {
  header: any;
  description: any;
  badges?: Array<{ badge: string, description: string }>;
  backgroundColor: string;
};

const ItineraryCard: React.FC<ItineraryCardProps> = ({ backgroundColor, header, description, badges }) => {
  return (
    <div className="relative p-4 rounded-lg justify-center">
      <div className="absolute inset-0 z-[-1] rounded-lg overflow-hidden">
        <PresetColorCircle className="w-full h-full" colorName={backgroundColor} />
      </div>

      <div className="p-2 rounded-lg">
        <TinaMarkdown 
            content={header} 
            components={{
                h1: (props) => (
                  <h1
                    className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                    {...props}
                  />
                ),
                h4: (props) => (
                  <h4
                    className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-secondary md:text-4xl text-center"
                    {...props}
                  />
                ),
                h5: (props) => (
                  <h5
                    className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                    {...props}
                  />
                ),
                bold: (props) => (
                  <span
                    className="bg-gradient-to-b from-yellow-400 to-red-600 bg-clip-text text-transparent"
                    {...props}
                  />
                ),
                // Customizing the italic component with a different color gradient
                em: (props) => (
                  <span
                    className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                    {...props}
                  />
                ),
                /*
                I want to make it so that if something is both italic and bold, it will be a different color
                */

                
                p: (props) => (
                  <p
                    className="mx-auto mt-8 max-w-[700px] px-2 text-left text-sm text-primary-foreground"
                    {...props}
                  />
                ),

              }} />
      </div>

      <div className="p-4 bg-white/30 backdrop-blur-md rounded-lg">
        <TinaMarkdown 
            content={description} 
            components={{
                h1: (props) => (
                  <h1
                    className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                    {...props}
                  />
                ),
                h4: (props) => (
                  <h4
                    className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-primary md:text-4xl"
                    {...props}
                  />
                ),
                h5: (props) => (
                  <h5
                    className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                    {...props}
                  />
                ),
                bold: (props) => (
                  <span
                    className="bg-gradient-to-b from-blue-400 to-green-600 bg-clip-text text-transparent"
                    {...props}
                  />
                ),
                
                p: (props) => (
                  <p
                    className="mx-auto max-w-[700px] px-2 text-left text-sm text-secondary-foreground"
                    {...props}
                  />
                ),

                
              }} />
      </div>

      <div className="relative p-4 rounded-lg justify-center">
        {badges?.map((item, index) => (
          <Badge key={index} variant="destructive" color="secondary">
            {item.badge}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ItineraryCard;
