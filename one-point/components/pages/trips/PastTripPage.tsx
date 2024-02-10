"use client";

import { TrippastQuery, TrippastQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { TripPastHero } from "@/components/pages/trips/hero/TripPastHero";
import { TripPastOverviewSection } from "@/components/pages/trips/overview/TripPastOverviewSection";


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
            
          }
        })}

      </>
    )
  }
