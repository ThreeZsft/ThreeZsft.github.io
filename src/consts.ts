/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Temper";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Custom websites for small creative businesses in Calgary, Edmonton, and across Alberta. Brand, design, code, and launch handled by one designer, start to finish.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://threezsft.github.io";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-CA";
/**
 * Routes kept out of search results. Each is excluded from the sitemap and
 * served with a `robots: noindex, nofollow` tag, so the two can't disagree.
 *
 * Surrounding slashes are optional: `"/thanks"`, `"thanks"` and `"/thanks/"`
 * all match the same route.
 */
export const NOINDEX_ROUTES: string[] = [
  "/404",
  // Draft case studies stay out of the sitemap until the draft flag clears.
  "/work/network-of-applied-technologies",
];
