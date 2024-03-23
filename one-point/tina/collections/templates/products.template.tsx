import type { Template } from "tinacms";

export const accordionBlock: Template = {
    name: 'products',
    label: 'Products',

    ui: {
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return { label: item?.title };
      },
    },

    fields: [

      {
        type: 'string',
        label: 'Product ID',
        name: 'id',
      },

      {
        type: 'string',
        label: 'Product Title',
        name: 'title',
      },

      {
        type: 'string',
        label: 'Product Description',
        name: 'description',
      },

      {
        type: 'number',
        label: 'Product Price',
        name: 'price',
      },

      {
        type: 'image',
        label: 'Product Image URL',
        name: 'imageUrl',
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
