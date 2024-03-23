"use client";

import { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


//import { Hero } from "@/components/pages/home/hero/Hero";
//import { Concept } from "@/components/pages/home/concept/Concept";
//import FAQ from "@/components/pages/home/FAQ/FAQ";

import ShoppingBasket from "./ShoppingBasket";

export default function ShopPage(props: {
    data: HomeQuery,
    variables: HomeQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.home.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "ShopBlocksBasket": {
              return <ShoppingBasket key={i} />
            }

          }
        })}

      </>
    )
  }
