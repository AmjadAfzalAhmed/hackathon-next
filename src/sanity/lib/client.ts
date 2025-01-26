import { createClient } from 'next-sanity';

// Import environment variables safely
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

// Validate environment variables to ensure they are defined
if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    "Missing environment variables: Ensure NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION are defined."
  );
}

// Export the configured client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
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
