import type { Template } from "tinacms";

export const productsBlock: Template = {
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
        type: 'object',
        label: 'Products',
        name: 'products',
        list: true,

        ui: {
          defaultItem: {
            title: 'Product Title',
            description: 'Product Description',
            price: 99,
            image: '/assets/images/shop/8.jpg',
            stripeLink: '/shop/3',
            soldOut: false,
          },

          itemProps: (item) => {
            // Field values are accessed by item?.<Field name>
            return { label: item?.title };

          },
        },

        fields: [
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
            label: 'Product Image',
            name: 'image',
          },
          {
            type: 'string',
            label: 'Stripe Link',
            description: 'Link to the product on Stripe',
            name: 'stripeLink',
          },
          {
            type: 'boolean',
            label: 'Sold Out',
            name: 'soldOut',
          },
        ],
      },
      
    ],
  }
