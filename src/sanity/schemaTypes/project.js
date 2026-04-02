export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Teknologi yang Digunakan',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'githubLink',
      title: 'Link GitHub',
      type: 'url',
    },
    {
      name: 'demoLink',
      title: 'Link Live Demo',
      type: 'url',
    },
  ],
}