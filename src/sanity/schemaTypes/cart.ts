export default {
    name: "foodItem",
    title: "Food Item",
    type: "document",
    fields: [
      {
        name: "id",
        title: "ID",
        type: "string"
      },
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
      },
      {
        name: "alternate",
        title: "Alternate Name",
        type: "string"
      },
      {
        name: "price",
        title: "Price",
        type: "number"
      },
      {
        name: "rating",
        title: "Rating",
        type: "number"
      },
      {
        name: "quantity",
        title: "Quantity",
        type: "number"
      },
      {
        name: "total",
        title: "Total",
        type: "number"
      }
    ]
  };
  