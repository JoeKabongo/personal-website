export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'github',
      type: 'url',
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'actions',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
