"use client";

import { AboutBlocksAccordion } from "@/tina/__generated__/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ(props: AboutBlocksAccordion) {

  // I want to add padding to the left and right of the FAQ section using tailwindcss
  // I want to style the header to be centered and have a larger font size
  // `${props.id}`
  return (
    <div id={`${props.id}`} className="px-10 py-12">
        <h1 className="text-4xl font-bold text-center">
        {props.title}
        </h1>

      <Accordion type="single" collapsible className="w-full">

        {
          props.items?.map((item, idx) => {
            return (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item?.trigger}</AccordionTrigger>
                <AccordionContent>{item?.content}</AccordionContent>
              </AccordionItem>
            )
          })
        }

      </Accordion>
        
    </div>
  );
}
