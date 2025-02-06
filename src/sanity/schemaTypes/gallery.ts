export default {
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string"
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true
        }
      }
    ]
  };
  