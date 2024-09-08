import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields:[{
    name: 'user',
    type: 'relationship',
    relationTo: 'users',
    required: true,
    hasMany: false,
    admin:{
        condition: () => false,
    }
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "description",
    type: "textarea",
    label: "Product details"
  }
],
};
