"use client";

import { GlobalQuery, GlobalQueryVariables } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";


import { Separator } from "@/components/ui/separator"

import { AlertDemo } from "@/components/shared/alert/AlertDemo";
import { AlertDialogDemo } from "@/components/shared/alert-dialog/AlertDialogDemo";

import { ButtonDemo } from "@/components/shared/button/ButtonDemo";
import { CalendarDemo } from "@/components/shared/calendar/CalendarDemo";
import { CardDemo } from "@/components/shared/card/CardDemo";

import { SheetDemo } from "@/components/shared/sheet/SheetDemo";
import { SonnerDemo } from "@/components/shared/sonner/SonnerDemo";



export default function DemoPage(props: {
  data: GlobalQuery;
  variables: GlobalQueryVariables;
  query: string;
  }

) {
  const { data } = useTina({
    data: props?.data,
    query: props?.query,
    variables: props?.variables,
  });

    return (
      <>
      <body className={`${data?.global?.theme}`}>
      <div className="flex-col items-center text-center">
        <h1>Alert</h1>
        <AlertDemo />

        <Separator />

        <h1>Alert Dialog</h1>
        <AlertDialogDemo />

        <Separator />

        <h1>Button</h1>
        <ButtonDemo />

        <Separator />

        <h1>Calendar</h1>
        <CalendarDemo />

        <Separator />

        <h1>Card</h1>
        <CardDemo />

        <Separator />

        <h1>Sheet</h1>
        <SheetDemo />

        <Separator />

        <h1>Sonner</h1>
        <SonnerDemo />

      </div>
      </body>
      </>
    )
  }
