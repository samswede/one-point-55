import { defineConfig } from "tinacms";


import {
  heroBlock,
  featureBlock,
  contentBlock,

  pasttripsBlock,
  itineraryBlock,

  accordionBlock,
  } from "./templates/templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";


export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",  
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [

      {
        label: 'Global',
        name: 'global',
        path: 'content/global',

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
            templates: [heroBlock, featureBlock, contentBlock],
          },
        ],
      },
      
      {
        label: 'Home',
        name: 'home',
        path: 'content/home',

        ui: {
          // Don't allow editors to create new items
          allowedActions: {
            create: false,
            delete: false,
          },

          // This makes the page the default route in the CMS
          // This is what makes it live editable!
          router: props => {
            return `/`
          }
        },

        fields: [
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            templates: [  heroBlock, 
                          featureBlock,
                          pasttripsBlock,

                          contentBlock, 
                          accordionBlock,
                        ],
          },
        ],
      },
      
      {
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
      },

      {
        label: 'Past Trips',
        name: 'trippast',
        path: 'content/tripspast',
        fields: [
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            templates: [heroBlock, contentBlock, itineraryBlock],
          },
        ],
      },

      {
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
            templates: [heroBlock, featureBlock, contentBlock],
          },
        ],
      },

      {
        label: 'Impressum',
        name: 'impressum',
        path: 'content/impressum',
        format: 'md',

        ui: {
          // Don't allow editors to create new items
          allowedActions: {
            create: false,
            delete: false,
          },

          // This makes the page the default route in the CMS
          // This is what makes it live editable!
          router: props => {
            return `/impressum`
          }
        },

        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
          },
          {
            type: 'rich-text',
            label: 'Post Body',
            name: 'body',
            isBody: true,
          },
        ],
      },


    ],
  },
});
