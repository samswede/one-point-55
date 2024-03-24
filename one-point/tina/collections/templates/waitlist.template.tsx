import type { Template } from "tinacms";

export const waitlistBlock: Template = {
    name: 'waitlist',
    label: 'Waitlist',

    ui: {
      defaultItem: {
        embeddedFormURL: '',
        targetDate: '2024-06-31T23:59:59'
      },
    },
  
    fields: [
      
      {
        type: 'string',
        label: 'Embedded Google Form URL',
        description: 'The URL of the embedded Google Form',
        name: 'embeddedFormURL',
      },
  
      {
        name: "targetDate",
        label: "Target Date",
        description: "The date the countdown is counting down to: YYYY-MM-DDTHH:MM:SS e.g. 2024-06-31T23:59:59",
        type: "string",
      },
  
    ],
  }
  