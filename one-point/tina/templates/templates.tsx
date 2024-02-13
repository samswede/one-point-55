
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
      type: 'image',
      label: 'Background Video (MP4 <30MB)',
      name: 'backgroundVideo',
    },

    {
      type: 'image',
      label: 'Background Fallback Image',
      name: 'backgroundFallbackImage',
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

const pasttripsBlock: Template = {
  name: 'pasttrips',
  label: 'Past Trips Section',

  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return { label: item?.title };
    },
    // Setting a default will auto-populate new items with the given values
    defaultItem: {
      message: "",
      style: "cards",
      backgroundVideo: "ibiza/waves_drone.mp4",
      
      tripscarousel: [
        {
          title: "Past Trip",
          header: "Location 202X",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          link: "/Location_202X",
          image: "",
        }
      ]

    }
  },

  fields: [
    
    {
      type: 'rich-text',
      label: 'Message',
      name: 'message',
    },

    {
      type: "string",
      label: "Carousel Style",
      name: "style",
      options: ["swiper", "cards"],
    },

    {
      type: 'image',
      label: 'Background Video (MP4 <30MB)',
      name: 'backgroundVideo',
    },

    {
      type: 'image',
      label: 'Background Fallback Image',
      name: 'backgroundFallbackImage',
    },

    {
      type: 'object',
      label: 'Past Trips',
      name: 'tripscarousel',
      list: true,

      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
        // Setting a default will auto-populate new items with the given values
        defaultItem: {
          title: "Past Trip",
          header: "Location 202X",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          link: "/Location_202X",
          image: "",
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
          label: 'Header',
          name: 'header',
        },

        {
          type: 'rich-text',
          label: 'Description',
          name: 'description',
        },

        {
          type: 'string',
          label: 'Link',
          name: 'link',
        },
        
        
        {
          type: 'image',
          label: 'Image',
          name: 'image',
        },
      ],
    }

  ],
}

const itineraryBlock: Template = {
  name: 'itinerary',
  label: 'Itinerary Section',

  ui: {
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return { label: item?.title };
    },
    // Setting a default will auto-populate new items with the given values
    defaultItem: {
      message: "",
      badges: [
        {
          badge: "badge 1",
        },
        {
          badge: "badge 2",
        },
        {
          badge: "badge 3",
        },
      ],
      
      carouselTitle: "Swipe through the days",
      
      itineraryCarousel: [
        {
          title: "Day 1",
          header: "Main Event in a Couple Words",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          badges: [
            {
              badge: "badge 1",
            },
            {
              badge: "badge 2",
            },
            {
              badge: "badge 3",
            },
          ],
          backgroundImage: "",
        }
      ]

    }
  },

  fields: [
    
    {
      label: 'Message',
      name: 'message',
      type: 'rich-text',
    },

    {
      label: 'Badges',
      name: 'badges',
      type: 'object',
      list: true,

      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.badge };
        },
        
      },

      fields: [
        {
          label: 'Badge',
          name: 'badge',
          type: 'string',
        },

      ],
    },

    {
      label: 'Carousel Title',
      name: 'carouselTitle',
      type: 'rich-text',
    },

    {
      label: 'Itinerary Cards Carousel',
      name: 'itineraryCarousel',
      type: 'object',
      list: true,

      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
        // Setting a default will auto-populate new items with the given values
        defaultItem: {
          title: "Day X",
          header: "Main Event in a Couple Words",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          badges: [
            {
              badge: "badge 1",
            },
            {
              badge: "badge 2",
            },
            {
              badge: "badge 3",
            },
          ],
          backgroundImage: "",
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
          label: 'Header',
          name: 'header',
        },

        {
          type: 'rich-text',
          label: 'Description',
          name: 'description',
        },

        {
          label: 'Badges',
          name: 'badges',
          type: 'object',
          list: true,

          ui: {
            itemProps: (item) => {
              // Field values are accessed by item?.<Field name>
              return { label: item?.badge };
            },
            
          },

          fields: [
            {
              label: 'Badge',
              name: 'badge',
              type: 'string',
            },

          ],
          
        },
        
        
        {
          
          label: 'Background Image',
          name: 'backgroundImage',
          type: 'image',
        },
      ],
    }

  ],
}

/*
const contactBlock: Template = {
  name: 'contact',
  label: 'Contact',
  fields: [

  ]

}
*/

/*
{
  type: "string",
  label: "Style",
  name: "style",
  options: ["swiper", "cards"],
},
*/

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
    pasttripsBlock,
    itineraryBlock,

    imageGalleryBlock,

    accordionBlock,
    }