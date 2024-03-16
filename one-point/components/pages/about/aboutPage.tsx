"use client";

import { AboutQuery, AboutQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import ContactSection from "@/components/pages/about/contact/ContactSection";
import FAQ from "@/components/pages/about/FAQ/FAQ";


export default function AboutPage(props: {
    data: AboutQuery,
    variables: AboutQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        <ContactSection/>

        {data.about.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "AboutBlocksHero": {
              return <ContactSection key={i} {...block} />
            }
            case "AboutBlocksAccordion": {
              return <FAQ key={i} {...block} />
            }
          }
        })}

      </>
    )
  }
