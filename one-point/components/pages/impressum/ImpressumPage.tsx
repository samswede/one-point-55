"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { ImpressumQuery, ImpressumQueryVariables } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";


import { TinaMarkdown } from "tinacms/dist/rich-text";



export default function ImpressumPage(props: {
    data: ImpressumQuery;
    variables: ImpressumQueryVariables;
    query: string;
    }) {

    const { data } = useTina({
        data: props.data,
        query: props.query,
        variables: props.variables,
    });

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24 
    bg-gradient-to-r from-indigo-500 from-10% to-emerald-500 to-90%">

        
        <h1>{data.impressum?.title}</h1>

        <TinaMarkdown content={data.impressum?.body} />
      
    </main>
  );
}