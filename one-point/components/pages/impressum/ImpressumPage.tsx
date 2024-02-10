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

        <TinaMarkdown content={data.impressum?.body} 
        
          /*
          components={
            {
              h1: (props) => <h1
                className="text-4xl font-bold text-indigo-900"
                >{...props}</h1>,
              h2: (props) => <h2
                className="text-3xl font-bold text-indigo-900"
                >{...props}</h2>,
              h3: (props) => <h3
                className="text-2xl font-bold text-indigo-900"
                >{...props}</h3>,

              p: (props) => <p
                className="text-lg font-normal text-indigo-900"
                >{...props}</p>,

              a: (props) => <a
                className="text-lg font-normal text-red-900"
                >{...props}</a>,
              

            }
          }
        */
        />
      
    </main>
  );
}