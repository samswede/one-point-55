import { Collection } from "tinacms";

import { heroBlock } from "./templates/hero.template";
import { contentBlock } from "./templates/content.template";
import { markdownBlock } from "./templates/markdown.template";
import { itineraryBlock } from "./templates/itinerary.template";

const trippastCollection : Collection = {
    label: 'Past Trips',
    name: 'trippast',
    path: 'content/tripspast',

    ui: {
      // This makes the page the default route in the CMS
      // This is what makes it live editable!
      // this is not working for some reason... 
      router: props => {
        console.log("printing router ui")
        console.log(props)
        //console.log(`/trips/past/${props?.fileName}`)
        return `/trips/past/testing`
        
      }
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

        templates: [heroBlock, contentBlock, markdownBlock, itineraryBlock],
      },
    ],
  }

export default trippastCollection;