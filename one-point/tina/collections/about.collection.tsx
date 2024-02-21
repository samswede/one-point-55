import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";

const aboutCollection : Collection = {
    label: 'About',
    name: 'about',
    path: 'content/about',

    ui: {
      // Don't allow editors to create new items
      allowedActions: {
        create: false,
        delete: false,
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

export default aboutCollection;