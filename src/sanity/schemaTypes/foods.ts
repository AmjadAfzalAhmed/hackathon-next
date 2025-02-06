export default {
  name: "recentPosts",
  title: "Recent Posts",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number"
    },
    {
      name: "date",
      title: "Date",
      type: "date"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    }
  ]
};
