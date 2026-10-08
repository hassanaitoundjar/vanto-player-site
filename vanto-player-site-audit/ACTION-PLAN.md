# Vanto Player SEO Action Plan

## 1. Core Content & UX Contradictions (Critical)
- **Free vs. Paid Clarity**: The hero claims "Download free" while the legal notice mentions a 7-day trial followed by a paid license (with no price listed). Publish a clear **Pricing Page** and harmonize the CTA copy.
- **Platform Availability**: The platform list implies iOS, macOS, and Smart TV are live, but they are marked as "Coming Soon". Clarify supported platforms and build dedicated landing pages for live platforms (e.g., Samsung TV, LG webOS, Firestick, Android TV, Windows).
- **EPG Contradiction**: The FAQ states there is no EPG, yet the hero and blog claim the opposite. Fix this discrepancy.
- **Unsubstantiated Claims**: Remove or clarify "zero buffering" and "100% legal" claims. Fix the dead "Become a Reseller" CTA.

## 2. Download Security & Trust (High)
- **APK Hosting**: Move the Android APK from an unbranded `r2.dev` URL to a branded subdomain (e.g., `downloads.vantoplayer.com`). 
- **Download Metadata**: Display the version number, exact file size, and a SHA-256 hash next to the download button to build trust. Ensure the Smart TV download button doesn't deceptively point to the same mobile APK.

## 3. Technical SEO & Headers (Medium)
- **Verified**: Schema (4 valid JSON-LD objects), HTTPS redirects, HSTS headers, canonicals, and `robots.txt` are properly configured. `<html lang="en">` is present.
- **Image Attributes**: While `next/image` is used, the `w=3840` URLs point to a missing `sizes` prop, causing LCP and page-weight bloat. Additionally, ensure `fill` layouts have fixed aspect ratio parents to avoid Cumulative Layout Shift (CLS).
- **Security Headers**: Add `X-Content-Type-Options: nosniff` in `next.config.ts`. (Note: `X-Frame-Options` is less critical if CSP `frame-ancestors` is used).
- **Nested Anchors**: Fix the HTML nested-anchor bug in the Smarters article.

## 4. Meta Tags & Social Graphs (Medium)
- **Title Tags**: Fix duplicated brand names on blog titles.
- **OpenGraph**: Set `og:type="article"` on blog posts, add per-article unique OG images, use `twitter:card="summary_large_image"`, and set explicit OG image sizes.

## 5. Blog & Scaled Content (Medium)
- **Content Consolidation**: The blog has 26 posts published in a short 3.5-week window with overlapping topics that cannibalize each other, followed by 2 months of inactivity. Consolidate overlapping posts into comprehensive pillar pages.
- **E-E-A-T**: Add a named author with a bio rather than an anonymous publisher.
- **Indexation**: Verify in Google Search Console that all valid 26 articles are indexed, and ensure `web.vantoplayer.com` and `/activation` are noindexed or canonicalized.
