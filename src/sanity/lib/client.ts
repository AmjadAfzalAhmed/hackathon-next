import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, 
  apiVersion: '2023-01-01', 
});

export const foodQuery = `*[_type == "food"]{
  _id,
  name,
  category,
  price,
  originalPrice,
  tags,
  description,
  available,
  "imageUrl": image.asset->url
}`;

export const chefQuery = `*[_type == "chef"]{
  _id,
  name,
  position,
  experience,
  specialty,
  description,
  available,
  "imageUrl": image.asset->url
}`;
