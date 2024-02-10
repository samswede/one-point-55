"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";

import FAQ from "@/components/pages/home/FAQ/FAQ";
import { WelcomeHero } from "@/components/pages/home/hero/WelcomeHero";
import { Concept } from "@/components/pages/home/concept/Concept";


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

          }
        })}

      </>
    )
  }
