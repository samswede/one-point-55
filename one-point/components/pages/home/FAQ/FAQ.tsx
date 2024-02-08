"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { PageQuery, PageQueryVariables } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";

import { AccordionDemo } from "@/components/shared/accordion/AccordionDemo";

export default function FAQ(props: {
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
    <div>
        <h1>
        Frequently Asked Questions
        </h1>

        <AccordionDemo />
        
    </div>
  );
}
