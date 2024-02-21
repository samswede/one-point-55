import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";

const tripupcomingCollection : Collection = {
    label: 'Upcoming Trips',
    name: 'tripupcoming',
    path: 'content/tripsupcoming',
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