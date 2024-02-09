"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { AccordionQuery, AccordionQueryVariables } from "@/tina/__generated__/types";
import { useTina, tinaField } from "tinacms/dist/react";


import { TinaMarkdown } from "tinacms/dist/rich-text";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export function AccordionTina(props: {
    data: AccordionQuery;
    variables: AccordionQueryVariables;
    query: string;
    }) {

    const { data } = useTina({
        data: props.data,
        query: props.query,
        variables: props.variables,
    });
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  