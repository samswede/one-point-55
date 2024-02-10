"use client";

import { TripupcomingQuery, TripupcomingQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { TripUpcomingHero } from "@/components/pages/trips/hero/TripUpcomingHero";
import { TripUpcomingOverviewSection } from "@/components/pages/trips/overview/TripUpcomingOverviewSection";


export default function UpcomingTripPage(props: {
    data: TripupcomingQuery,
    variables: TripupcomingQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.tripupcoming.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "TripupcomingBlocksHero": {
              return <TripUpcomingHero key={i} {...block} />
            }
            
            case "TripupcomingBlocksContent": {
              return <TripUpcomingOverviewSection key={i} {...block} />
            }
            
          }
        })}

      </>
    )
  }
