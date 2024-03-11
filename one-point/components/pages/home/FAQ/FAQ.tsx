"use client"; // This is a special comment that tells Tina to use the client from the generated file

import { HomeBlocksAccordion } from "@/tina/__generated__/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ(props: HomeBlocksAccordion) {

  // I want to add padding to the left and right of the FAQ section using tailwindcss
  // I want to style the header to be centered and have a larger font size
  return (
    <div id="FAQ" className="px-10 py-12">
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
