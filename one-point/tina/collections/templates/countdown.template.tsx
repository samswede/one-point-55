import type { Template } from "tinacms";

export const countdownBlock: Template = {
    name: 'countdown',
    label: 'Countdown',
  
    fields: [
      
      {
        type: 'rich-text',
        label: 'Message',
        name: 'message',
      },
  
      {
        name: "links",
        label: "Links",
        type: "object",
        list: true,
  
        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.label };
          },
        },
  
        fields: [
          { type: "string", name: "link" },
          { type: "string", name: "label" },
          {
            type: "string",
            name: "style",
            options: ["light", "dark"],
          },
        ],
      },
  
    ],
  }
  