"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { PageQuery, PageQueryVariables } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";

import FAQ from "@/components/pages/home/FAQ/FAQ";

export default function HomePage(props: {
    data: PageQuery;
    variables: PageQueryVariables;
    query: string;
    }) {

    const { data } = useTina({
        data: props.data,
        query: props.query,
        variables: props.variables,
    });

  return (
    <main className="flex min-h-screen flex-col  justify-between p-24 
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

        <h1 
            data-tina-field={tinaField(props.data.page, "title")}>
            {data.page?.title}
        </h1>

        <p
            data-tina-field={tinaField(props.data.page, "subtitle")}>
            {data.page?.subtitle}
        </p>
      
        <FAQ 
            data={props.data} 
            query={props.query}
            variables={props.variables}
        />
    </main>
  );
}
