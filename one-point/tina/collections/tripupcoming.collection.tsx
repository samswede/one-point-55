import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";

const tripupcomingCollection : Collection = {
    label: 'Upcoming Trips',
    name: 'tripupcoming',
    path: 'content/tripsupcoming',
    ui: {
      // This makes the page the default route in the CMS
      // This is what makes it live editable!
      router: ({ document }) => {
        // navigate to the project that was clicked
        return `/trips/upcoming/${document._sys.filename}`
      },
    },
    fields: [
      {
        type: 'object',
        list: true,
        name: 'blocks',
        label: 'Sections',
        templates: [heroBlock, contentBlock],
      },
    ],
  }

export default tripupcomingCollection;