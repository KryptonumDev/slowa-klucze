export interface Sitemap {
  landingPages: {
    slug: {
      current: string;
    };
  }[];
  blogCategories: {
    slug: {
      current: string;
    };
  }[];
  blogEntries: {
    slug: {
      current: string;
    };
  }[];
}
