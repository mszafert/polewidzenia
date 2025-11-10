import { GlobalConfig } from 'payload';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'welcomeMessage',
      label: 'Welcome Message',
      type: 'text',
      admin: { description: 'A welcome message to display on the homepage' },
    },
    {
      name: 'featureBackgroundImage',
      label: 'Feature Background Image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'A feature background image to be used as the homepage background' },
    },
    {
      name: 'startPage',
      label: 'Start Page',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        description: 'The page which will be displayed when the user first visits the website',
        placeholder: 'Select a page',
      },
    },
    {
      name: 'quickNavLinks',
      label: 'Quick Navigation Links',
      type: 'array',
      fields: [
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            placeholder: 'Select a page',
            description: 'The page to link to',
          },
        },
      ],
      admin: {
        description: 'Links to important pages for quick navigation',
      },
    },
    {
      name: 'privacyPolicyUrl',
      label: 'Privacy Policy URL',
      type: 'relationship',
      relationTo: 'pages',
      admin: {
        description: 'The page containing the privacy policy',
        placeholder: 'Select an URL',
      },
    },
    {
      name: 'facebookUrl',
      label: 'Facebook URL',
      type: 'text',
      admin: { description: 'The URL of the Facebook page' },
    },
    {
      name: 'instagramUrl',
      label: 'Instagram URL',
      type: 'text',
      admin: { description: 'The URL of the Instagram page' },
    }
  ],
};
