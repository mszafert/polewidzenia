import { GlobalConfig } from "payload";

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'navItems',
      label: 'Main Menu',
      type: 'array',
      fields: [
        {
          name: 'page',
          label: 'Nav Item Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: { description: 'The page the navigation item links to' },
        },
      ],
      admin: { description: 'The main navigation menu items' },
    },
  ],
};
