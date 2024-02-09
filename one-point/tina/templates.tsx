
import type { Template } from 'tinacms'

const heroBlock: Template = {
  name: 'hero',
  label: 'Hero',

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

const featureBlock: Template = {
  name: 'features',
  label: 'Features',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
      ],
    },
  ],
}
  
const contentBlock: Template = {
  name: 'content',
  label: 'Content',
  ui: {
    defaultItem: {
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    },
  },
  fields: [
    {
      type: 'string',
      ui: {
        component: 'textarea',
      },
      label: 'Body',
      name: 'body',
    },
  ],
}

/*

const markdownBlock: Template = {
    name: 'markdown',
    label: 'Markdown',
    format: 'md',
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
}

*/

const accordionBlock: Template = {
    name: 'accordion',
    label: 'Accordion',

    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
    },

    fields: [
      {
        type: 'string',
        label: 'Accordion Title',
        name: 'title',
      },

      {
        type: 'object',
        label: 'Accordion Items',
        name: 'items',

        ui: {
          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.trigger };
          },
        },

        list: true,
        fields: [
          {
            type: 'string',
            label: 'Trigger',
            name: 'trigger',
          },
          {
            type: 'string',
            label: 'Content',
            name: 'content',
          },
        ],
      },
    ],
  }

const imageGalleryBlock: Template = {

    label: "Image Gallery",
    name: "gallery",
    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
    },
    fields: [
        {
            type: 'object',
            label: 'Image Items',
            name: 'items',
            list: true,
            fields: [
                {
                    label: "Title",
                    name: "title",
                    type: "string",
                },
                { label: "Image", name: "image", type: "image" },
                {
                    label: "Size",
                    name: "size",
                    type: "string",
                    options: ["sm", "med", "lg", "xl"],
                },
            ]
        }
    ],
  };

export {
    heroBlock,
    featureBlock,
    contentBlock,

    imageGalleryBlock,

    accordionBlock,
    }