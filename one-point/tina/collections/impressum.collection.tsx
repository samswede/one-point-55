import { Collection } from "tinacms";

const impressumCollection : Collection = {
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
  }

export default impressumCollection;