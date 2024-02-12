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

        <TinaMarkdown 
          content={data.impressum?.body} 
          components={
            {
              h1: (props) => (
                <h1
                  className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-6xl"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="mx-auto text-3xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl"
                  {...props}
                />
              ),
              h4: (props) => (
                <h4
                  className="mx-auto text-2xl font-extrabold leading-tight tracking-tighter text-primary md:text-4xl"
                  {...props}
                />
              ),
              h5: (props) => (
                <h5
                  className="mx-auto text-xl font-extrabold leading-tight tracking-tighter text-primary md:text-3xl"
                  {...props}
                />
              ),
              bold: (props) => (
                <span
                  className="bg-gradient-to-b from-blue-400 to-green-600 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              // Customizing the italic component with a different color gradient
              em: (props) => (
                <span
                  className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
                  {...props}
                />
              ),
              /*
              I want to make it so that if something is both italic and bold, it will be a different color
              */

              
              p: (props) => (
                <p
                  className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground"
                  {...props}
                />
              ),
              

            }
          }
        
        />
      
    </main>
  );
}