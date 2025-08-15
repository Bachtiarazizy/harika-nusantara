// lib/sanityProductQueries.js

import { client } from "@/sanity/client";

// Get all active products with category info
export async function getAllProducts() {
  const query = `
    *[_type == "product" && active == true] | order(priority desc, publishedAt desc) {
      _id,
      title,
      slug,
      shortDescription,
      productType,
      featured,
      priority,
      rating,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      category-> {
        _id,
        name,
        slug,
        color,
        icon
      },
      specifications,
      origins,
      processingMethods,
      qualityGrades,
      specificationSheet {
        asset-> {
          _id,
          url,
          originalFilename
        }
      }
    }
  `;

  return await client.fetch(query);
}

// Get products by category
export async function getProductsByCategory(categorySlug) {
  const query = `
    *[_type == "product" && active == true && category->slug.current == $categorySlug] | order(priority desc, publishedAt desc) {
      _id,
      title,
      slug,
      shortDescription,
      productType,
      featured,
      priority,
      rating,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      category-> {
        _id,
        name,
        slug,
        color,
        icon
      },
      specifications,
      origins,
      processingMethods,
      qualityGrades,
      specificationSheet {
        asset-> {
          _id,
          url,
          originalFilename
        }
      }
    }
  `;

  return await client.fetch(query, { categorySlug });
}

// Get featured products
export async function getFeaturedProducts(limit = 4) {
  const query = `
    *[_type == "product" && active == true && featured == true] | order(priority desc, publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      shortDescription,
      productType,
      rating,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      category-> {
        _id,
        name,
        slug,
        color,
        icon
      },
      specifications,
      origins,
      processingMethods,
      qualityGrades,
      specificationSheet {
        asset-> {
          _id,
          url,
          originalFilename
        }
      }
    }
  `;

  return await client.fetch(query, { limit });
}

// Get single product by slug
export async function getProductBySlug(slug) {
  const query = `
    *[_type == "product" && slug.current == $slug && active == true][0] {
      _id,
      title,
      slug,
      shortDescription,
      fullDescription,
      productType,
      featured,
      priority,
      rating,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      gallery[] {
        asset-> {
          _id,
          url
        },
        alt,
        caption
      },
      category-> {
        _id,
        name,
        slug,
        description,
        color,
        icon
      },
      specifications,
      origins,
      processingMethods,
      qualityGrades,
      certifications[] {
        name,
        description,
        logo {
          asset-> {
            _id,
            url
          }
        }
      },
      specificationSheet {
        asset-> {
          _id,
          url,
          originalFilename
        }
      },
      additionalDocuments[] {
        title,
        description,
        file {
          asset-> {
            _id,
            url,
            originalFilename
          }
        }
      },
      detailedContent,
      seo,
      publishedAt
    }
  `;

  return await client.fetch(query, { slug });
}

// Generate static params for product pages
export async function getAllProductSlugs() {
  const query = `
    *[_type == "product" && active == true] {
      "slug": slug.current
    }
  `;

  return await client.fetch(query);
}

// Get all product categories
export async function getAllProductCategories() {
  const query = `
    *[_type == "productCategory"] | order(order asc) {
      _id,
      name,
      slug,
      description,
      icon,
      color,
      order
    }
  `;

  return await client.fetch(query);
}

// Get related products (same category, exclude current)
export async function getRelatedProducts(categoryId, currentProductId, limit = 3) {
  const query = `
    *[_type == "product" && active == true && category._ref == $categoryId && _id != $currentProductId] | order(priority desc, publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      shortDescription,
      productType,
      rating,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      category-> {
        _id,
        name,
        slug,
        color
      }
    }
  `;

  return await client.fetch(query, { categoryId, currentProductId, limit });
}
