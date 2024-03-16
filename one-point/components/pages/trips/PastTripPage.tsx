"use client";

import { TrippastQuery, TrippastQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { TripPastHero } from "@/components/pages/trips/hero/TripPastHero";
import { TripPastOverviewSection } from "@/components/pages/trips/overview/TripPastOverviewSection";
import { TripPastItinerarySection } from "@/components/pages/trips/itinerary/TripPastItinerarySection";
import { GallerySection } from "@/components/pages/trips/gallery/TripPastGallerySection";
import { TripPastTeamSection } from "@/components/pages/trips/team/TripPastTeamSection";

import TextMD from "@/components/shared/text/TextMD";


export default function PastTripPage(props: {
    data: TrippastQuery,
    variables: TrippastQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.trippast.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "TrippastBlocksHero": {
              return <TripPastHero key={i} {...block} />
            }
            
            case "TrippastBlocksContent": {
              return <TripPastOverviewSection key={i} {...block} />
            }

            case "TrippastBlocksItinerary": {
              return <TripPastItinerarySection key={i} {...block} />
            }
            
            case "TrippastBlocksMarkdown": {
              return (
              <div className="px-12 bg-accent">
                <TextMD key={i} 
                  content={block.content}
                  className = {block.style?.className || "mx-auto"}
                  headerClassName = {block.style?.headerClassName || "font-extrabold leading-tight tracking-tighter text-primary"}
                  headerColor = {block.style?.headerColor || "text-primary"}
                  boldClassName = {block.style?.boldClassName || "bg-clip-text text-transparent"}
                  boldColor = {block.style?.boldColor || "bg-gradient-to-b from-yellow-400 to-red-600"}
                  pClassName = {block.style?.pClassName || "mt-8 max-w-[700px] px-2 text-center text-xl"}
                  pColor = {block.style?.pColor || "text-muted-foreground"}

                  />
              </div>
                 )
            }

            case "TrippastBlocksGallery": {
              return <GallerySection key={i} {...block} />
            }

            case "TrippastBlocksTeam": {
              return <TripPastTeamSection key={i} {...block} />
            }
            
          }
        })}

      </>
    )
  }

