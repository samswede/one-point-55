import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { markdownBlock } from "./templates/markdown.template";
import { itineraryBlock } from "./templates/itinerary.template";
import { galleryBlock } from "./templates/gallery.template";
import { teamBlock } from "./templates/team.template";
import { countdownBlock } from "./templates/countdown.template";

const trippastCollection : Collection = {
    label: 'Past Trips',
    name: 'trippast',
    path: 'content/tripspast',

    ui: {
      // This makes the page the default route in the CMS
      // This is what makes it live editable!
      router: ({ document }) => {
        // navigate to the project that was clicked
        return `/trips/past/${document._sys.filename}`
      },
    },

    fields: [
      {
        label: 'File Name',
        name: 'fileName',
        description: 'Must match the file name above (NOT including .md)! This is what makes it live editable.',
        type: 'string',
      },
      {
        label: 'Sections',
        name: 'blocks',
        type: 'object',
        list: true,

        templates: [heroBlock, contentBlock, markdownBlock, itineraryBlock, galleryBlock, teamBlock, countdownBlock],
      },
    ],
  }

export default trippastCollection;