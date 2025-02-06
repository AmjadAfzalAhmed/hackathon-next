
export type SanityImagePaletteSwatch = {
    _type: "sanity.imagePaletteSwatch";
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
  
  export type SanityImagePalette = {
    _type: "sanity.imagePalette";
    darkMuted?: SanityImagePaletteSwatch;
    lightVibrant?: SanityImagePaletteSwatch;
    darkVibrant?: SanityImagePaletteSwatch;
    vibrant?: SanityImagePaletteSwatch;
    dominant?: SanityImagePaletteSwatch;
    lightMuted?: SanityImagePaletteSwatch;
    muted?: SanityImagePaletteSwatch;
  };
  
  export type SanityImageDimensions = {
    _type: "sanity.imageDimensions";
    height?: number;
    width?: number;
    aspectRatio?: number;
  };
  
  export type SanityFileAsset = {
    _id: string;
    _type: "sanity.fileAsset";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    originalFilename?: string;
    label?: string;
    title?: string;
    description?: string;
    altText?: string;
    sha1hash?: string;
    extension?: string;
    mimeType?: string;
    size?: number;
    assetId?: string;
    uploadId?: string;
    path?: string;
    url?: string;
    source?: SanityAssetSourceData;
  };
  
  export type Geopoint = {
    _type: "geopoint";
    lat?: number;
    lng?: number;
    alt?: number;
  };
  
  export type Sale = {
    _id: string;
    _type: "sale";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    description?: string;
    badge?: string;
    discountAmount?: number;
    couponCode?: string;
    validFrom?: string;
    validUntil?: string;
    isActive?: boolean;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  };
  
  export type Order = {
    _id: string;
    _type: "order";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    orderNumber?: string;
    stripeCheckoutSessionId?: string;
    stripeCustomerId?: string;
    clerkUserId?: string;
    customerName?: string;
    email?: string;
    stripePaymentIntentId?: string;
    products?: Array<{
      product?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "product";
      };
      quantity?: number;
      _key: string;
    }>;
    totalPrice?: number;
    currency?: string;
    amountDiscount?: number;
    status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
    orderDate?: string;
  };
  
  export type Product = {
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    description?: string;
    price?: number;
    discount?: number;
    categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }>;
    stock?: number;
    label?: string;
    status?: "new" | "hot" | "sale";
  };
  
  export type Category = {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
  };
  
  export type Slug = {
    _type: "slug";
    current?: string;
    source?: string;
  };
  
  export type BlockContent = Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  
  export type SanityImageCrop = {
    _type: "sanity.imageCrop";
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  
  export type SanityImageHotspot = {
    _type: "sanity.imageHotspot";
    x?: number;
    y?: number;
    height?: number;
    width?: number;
  };
  
  export type SanityImageAsset = {
    _id: string;
    _type: "sanity.imageAsset";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    originalFilename?: string;
    label?: string;
    title?: string;
    description?: string;
    altText?: string;
    sha1hash?: string;
    extension?: string;
    mimeType?: string;
    size?: number;
    assetId?: string;
    uploadId?: string;
    path?: string;
    url?: string;
    metadata?: SanityImageMetadata;
    source?: SanityAssetSourceData;
  };
  
  export type SanityAssetSourceData = {
    _type: "sanity.assetSourceData";
    name?: string;
    id?: string;
    url?: string;
  };
  
  export type SanityImageMetadata = {
    _type: "sanity.imageMetadata";
    location?: Geopoint;
    dimensions?: SanityImageDimensions;
    palette?: SanityImagePalette;
    lqip?: string;
    blurHash?: string;
    hasAlpha?: boolean;
    isOpaque?: boolean;
  };
  
  export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Sale | Order | Product | Category | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
  export declare const internalGroqTypeReferenceTo: unique symbol;
  // Source: ./sanity/helpers/index.ts
  // Variable: PRODUCTS_QUERY
  // Query: *[_type=="product"] | order(name asc)
  export type PRODUCTS_QUERYResult = Array<{
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    description?: string;
    price?: number;
    discount?: number;
    categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }>;
    stock?: number;
    label?: string;
    status?: "hot" | "new" | "sale";
  }>;
  // Variable: CATEGORIES_QUERY
  // Query: *[_type=="category"] | order(name asc)
  export type CATEGORIES_QUERYResult = Array<{
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
  }>;
  // Variable: ACTIVE_COUPON_CODE
  // Query: *[_type == 'sale' && isActive == true && couponCode == $couponCode] | order(validFrom desc)[0]
  export type ACTIVE_COUPON_CODEResult = {
    _id: string;
    _type: "sale";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    description?: string;
    badge?: string;
    discountAmount?: number;
    couponCode?: string;
    validFrom?: string;
    validUntil?: string;
    isActive?: boolean;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
  // Variable: PRODUCT_SEARCH_QUERY
  // Query: *[_type == "product" && name match $searchParam] | order(name asc)
  export type PRODUCT_SEARCH_QUERYResult = Array<{
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    description?: string;
    price?: number;
    discount?: number;
    categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }>;
    stock?: number;
    label?: string;
    status?: "hot" | "new" | "sale";
  }>;
  // Variable: PRODUCT_BY_ID_QUERY
  // Query: *[_type == "product" && slug.current == $slug] | order(name asc) [0]
  export type PRODUCT_BY_ID_QUERYResult = {
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    description?: string;
    price?: number;
    discount?: number;
    categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }>;
    stock?: number;
    label?: string;
    status?: "hot" | "new" | "sale";
  } | null;
  // Variable: PRODUCT_BY_CATEGORY_QUERY
  // Query: *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)
  export type PRODUCT_BY_CATEGORY_QUERYResult = Array<{
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    description?: string;
    price?: number;
    discount?: number;
    categories?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "category";
    }>;
    stock?: number;
    label?: string;
    status?: "hot" | "new" | "sale";
  }>;
  // Variable: SALE_QUERY
  // Query: *[_type == 'sale'] | order(name asc)
  export type SALE_QUERYResult = Array<{
    _id: string;
    _type: "sale";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    description?: string;
    badge?: string;
    discountAmount?: number;
    couponCode?: string;
    validFrom?: string;
    validUntil?: string;
    isActive?: boolean;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  }>;
  // Variable: MY_ORDERS_QUERY
  // Query: *[_type == 'order' && clerkUserId == $userId] | order(orderData desc){    ...,products[]{      ...,product->    }  }
  export type MY_ORDERS_QUERYResult = Array<{
    _id: string;
    _type: "order";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    orderNumber?: string;
    stripeCheckoutSessionId?: string;
    stripeCustomerId?: string;
    clerkUserId?: string;
    customerName?: string;
    email?: string;
    stripePaymentIntentId?: string;
    products: Array<{
      product: {
        _id: string;
        _type: "product";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        name?: string;
        slug?: Slug;
        image?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          _type: "image";
        };
        description?: string;
        price?: number;
        discount?: number;
        categories?: Array<{
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          _key: string;
          [internalGroqTypeReferenceTo]?: "category";
        }>;
        stock?: number;
        label?: string;
        status?: "hot" | "new" | "sale";
      } | null;
      quantity?: number;
      _key: string;
    }> | null;
    totalPrice?: number;
    currency?: string;
    amountDiscount?: number;
    status?: "cancelled" | "delivered" | "paid" | "pending" | "shipped";
    orderDate?: string;
  }>;
  
  // Query TypeMap
  import "@sanity/client";
  declare module "@sanity/client" {
    interface SanityQueries {
      "*[_type==\"product\"] | order(name asc)": PRODUCTS_QUERYResult;
      "*[_type==\"category\"] | order(name asc)": CATEGORIES_QUERYResult;
      "*[_type == 'sale' && isActive == true && couponCode == $couponCode] | order(validFrom desc)[0]": ACTIVE_COUPON_CODEResult;
      "*[_type == \"product\" && name match $searchParam] | order(name asc)": PRODUCT_SEARCH_QUERYResult;
      "*[_type == \"product\" && slug.current == $slug] | order(name asc) [0]": PRODUCT_BY_ID_QUERYResult;
      "*[_type == 'product' && references(*[_type == \"category\" && slug.current == $categorySlug]._id)] | order(name asc)": PRODUCT_BY_CATEGORY_QUERYResult;
      "*[_type == 'sale'] | order(name asc)": SALE_QUERYResult;
      "*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){\n    ...,products[]{\n      ...,product->\n    }\n  }": MY_ORDERS_QUERYResult;
    }
  }