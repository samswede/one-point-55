import type { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { accordionBlock } from "./templates/accordion.template";

import { countdownBlock } from "./templates/countdown.template";

import { productsBlock } from "./templates/products.template";

const shopCollection : Collection = {
    label: 'Shop',
    name: 'shop',
    path: 'content/shop',

    ui: {
      // Don't allow editors to create new items
      
      allowedActions: {
        create: false,
        delete: false,
      },
      
      // This makes the page the default route in the CMS
      // This is what makes it live editable!
      router: props => {
        return `/shop`
      }
    },

    fields: [
      {
        type: 'object',
        list: true,
        name: 'blocks',
        label: 'Sections',
        templates: [  heroBlock, 
                      productsBlock,
                      contentBlock, 
                      accordionBlock,
                      countdownBlock
                    ],
      },
    ],
  }

export default shopCollection;