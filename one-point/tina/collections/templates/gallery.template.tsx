import type { Template } from "tinacms";

const images = [
    {
       src: null,
       width: 320,
       height: 174,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: null,
        width: 320,
        height: 174,
        caption: "After Rain (Jeshu John - designerspics.com)",
     },
];

export const galleryBlock: Template = {

    label: "Image Gallery",
    name: "gallery",
    
    fields: [
        {
            type: 'object',
            label: 'Image Items',
            name: 'items',
            list: true,

            ui: {
                itemProps: (item) => {
                  // Field values are accessed by item?.<Field name>
                  return { label: item?.caption };
                },
          
                  defaultItem: {
                      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                      caption: "caption",
                      width: 320,
                      height: 174,
                  },
              },

            fields: [
                
                { 
                    label: "Image", 
                    name: "src", 
                    type: "image" 
                },

                {
                    label: "Caption",
                    name: "caption",
                    type: "string",
                },

                {
                    label: "Width",
                    name: "width",
                    type: "number",
                },

                {
                    label: "Height",
                    name: "height",
                    type: "number",
                }
            ]
        }
    ],
  };