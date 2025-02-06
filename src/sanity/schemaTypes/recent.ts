// First, import the necessary parts from Sanity's schema library
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'recentPost', 
  title: 'Recent Post', 
  type: 'document', 
  fields: [
    defineField({
      name: 'title', 
      title: 'Title', 
      type: 'string', 
      description: 'The unique identifier for the post', 
    }),
    defineField({
      name: 'date', 
      title: 'Date', 
      type: 'date', 
      options: {
        dateFormat: 'MMM DD, YYYY', 
      },
      description: 'The date of the post', 
    }),
    defineField({
      name: 'image', 
      title: 'Image', 
      type: 'image', 
      options: {
        hotspot: true, 
      },
      description: 'The image associated with the post', 
    }),
    defineField({
      name: 'excerpt', 
      title: 'Excerpt', 
      type: 'text', 
      description: 'A short excerpt from the post', 
    }),
  ],
});