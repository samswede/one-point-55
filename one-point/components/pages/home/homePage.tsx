"use client";

import { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { WelcomeHero } from "@/components/pages/home/hero/WelcomeHero";
import { Concept } from "@/components/pages/home/concept/Concept";
import { PastTripsSection } from "@/components/pages/home/trips/past/PastTripsSection";
import { UpcomingTripsSection } from "@/components/pages/home/trips/upcoming/UpcomingTripsSection";
import FAQ from "@/components/pages/home/FAQ/FAQ";

import SheetWaitlistCountdown from "@/components/shared/sheet/SheetWaitlistCountdown";

export default function HomePage(props: {
    data: HomeQuery,
    variables: HomeQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.home.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "HomeBlocksHero": {
              return <WelcomeHero key={i} {...block} />
            }
            case "HomeBlocksAccordion": {
              return <FAQ key={i} {...block} />
            }
            case "HomeBlocksContent": {
              return <Concept key={i} {...block} />
            }
            case "HomeBlocksPasttrips": {
              return <PastTripsSection key={i} {...block} />
            }
            case "HomeBlocksUpcomingtrips": {
              return <UpcomingTripsSection key={i} {...block} />
            }
            case "HomeBlocksWaitlist": {
              return <SheetWaitlistCountdown
                key={i}
                targetDate={block?.targetDate || "2024-12-31T23:59:59"}
                embeddedFormURL={block?.embeddedFormURL || "https://docs.google.com/forms/d/e/1FAIpQLSf4Zy254a3orX3rD1FN_Auz69neDjVlB-ieAgagtmeuc9W5YA/viewform?embedded=true"}
              />
              }
          }
        })}

      </>
    )
  }
