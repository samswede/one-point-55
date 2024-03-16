import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { accordionBlock } from "./templates/accordion.template";
import { galleryBlock } from "./templates/gallery.template";

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

      // This makes the home page the default route when editing live
      router: props => {
        return `/about`
      },
    },

    fields: [
      {
        type: 'object',
        list: true,
        name: 'blocks',
        label: 'Sections',
        templates: [heroBlock, contentBlock, accordionBlock, galleryBlock],
      },
    ],
  }

export default aboutCollection;