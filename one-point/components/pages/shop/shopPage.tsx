"use client";

import { ShopQuery, ShopQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


//import { Hero } from "@/components/pages/home/hero/Hero";
//import { Concept } from "@/components/pages/home/concept/Concept";
//import FAQ from "@/components/pages/home/FAQ/FAQ";

import ProductGroup from "./ProductGroup";

export default function ShopPage(props: {
    data: ShopQuery,
    variables: ShopQueryVariables,
    query: string
  }) {
    const { data } = useTina(props)
  
    return (
      <>

        {data.shop.blocks?.map((block, i) => {
          switch (block?.__typename) {
            case "ShopBlocksProducts": {
              return <ProductGroup key={i} {...block}/>
            }

          }
        })}

      </>
    )
  }
