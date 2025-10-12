import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
      admin: {
        description: 'This title will be used in the page header and for SEO purposes.',
      },
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'This slug will be used in the URL and for SEO purposes.',
      },
    },
    {
      name: 'featureImageBackground',
      label: 'Feature Image Background',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'A feature image to be used as the background for the left side of the page',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
