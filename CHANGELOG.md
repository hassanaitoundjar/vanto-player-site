# Vanto Player — Project Changelog & Revision History

All notable technical changes, architectural enhancements, UI/UX redesigns, and policy refactorings implemented for Vanto Player are documented in this file.

---

## [2.4.0] — Comprehensive Overhaul & AdSense Optimization (March 2026)

### Added
- **New Core Pages:**
  - `app/about/page.tsx`: Created professional Company About Us page establishing corporate identity, engineering mission, supported platforms, zero-content policy, and direct contact details.
- **20 High-Quality Technical Curriculum Articles in `posts/`:**
  - `what-is-an-m3u-file-technical-guide.md`: Complete M3U file specification, directives, parser mechanics.
  - `m3u-vs-m3u8-differences-explained.md`: UTF-8 encoding vs Latin-1, BOM markers, HLS compatibility.
  - `understanding-hls-streaming-technology.md`: RFC 8216 architecture, master vs media manifests, CMAF fMP4, LL-HLS.
  - `h264-vs-h265-video-codec-comparison.md`: Macroblocks vs CTUs, 4K bitrate math, GPU hardware decoding.
  - `what-is-an-epg-and-how-does-it-work.md`: XMLTV schemas, DVB-SI tables, timezone offset normalization, SQLite caching.
  - `how-to-play-local-media-on-android-tv.md`: SMBv3/NFS, exFAT USB mounting, Scoped Storage, eARC audio passthrough.
  - `how-to-setup-media-player-windows.md`: D3D11VA GPU acceleration, HEVC Video Extensions, HDR calibration, 24Hz cadence.
  - `understanding-smart-tv-video-formats.md`: Tizen, webOS, Android TV comparison, DTS vs Dolby licensing, 100Mbps LAN bottleneck.
  - `how-to-choose-a-media-player.md`: Native compiled vs Electron architectures, virtualized list rendering, privacy scorecard.
  - `how-browser-based-video-playback-works.md`: HTML5 `<video>`, Media Source Extensions (MSE), EME DRM, WebCodecs API.
  - `how-to-fix-m3u-playlist-loading-errors.md`: Debugging HTTP 401/403/404, CORS headers, SSL handshake failures, cURL diagnostics.
  - `how-to-troubleshoot-video-buffering.md`: Client buffer underflow math, bufferbloat, ISP throttling, Wi-Fi 5GHz vs 2.4GHz.
  - `common-hls-playback-problems.md`: EXT-X-DISCONTINUITY stalls, sliding window 404s, PTS/DTS timestamp drift, CORS headers.
  - `why-some-video-formats-do-not-play-on-smart-tvs.md`: Audio codec licensing exclusions, H.264 Hi10P profile limitations, ASS subtitle lag.
  - `how-to-diagnose-network-streaming-problems.md`: MTR hop inspection, EDNS CDN edge misrouting, Path MTU discovery.
  - `understanding-direct-play-vs-transcoding.md`: Direct Play vs Remuxing vs Transcoding, CPU load math, subtitle burn-in.
  - `how-media-playlists-work.md`: Manifest parsing lifecycle, DFA state-machine tokenizers, RFC 7232 conditional caching.
  - `how-to-protect-privacy-when-using-media-players.md`: DNS over HTTPS/TLS, Encrypted Client Hello, telemetry auditing, WireGuard.
  - `understanding-video-containers-and-codecs.md`: Containers (MP4, MKV, TS) vs Codecs (H.264, HEVC, AV1, AAC, DTS), `moov` atom fast start.
  - `how-to-improve-local-network-media-streaming.md`: Cat6 cabling, Wi-Fi 6 OFDMA, Smart Queue Management (CAKE), IGMP snooping.
- **New Interactive Components:**
  - `components/blog/BlogIndexClient.tsx`: Client-side real-time search, category pill filter, hero featured article, and responsive article grid.
  - `components/blog/TableOfContents.tsx`: Dynamic, collapsible Table of Contents with IntersectionObserver scrollspy and smooth scrolling.
  - `components/blog/ArticleActions.tsx`: Social sharing bar (X/Twitter, LinkedIn) and one-click copy-link with visual toast confirmation.
  - `components/ui/CookieConsent.tsx`: Accessible GDPR/CCPA cookie consent dialog with LocalStorage state persistence.
  - `components/sections/HowItWorks.tsx`: 4-step onboarding guide (Download $\rightarrow$ Input Stream Source $\rightarrow$ Configure EPG $\rightarrow$ Enjoy 4K).
  - `components/sections/LatestArticles.tsx`: Dynamic homepage showcase of top engineering guides with direct links.
  - `components/sections/DownloadCta.tsx`: High-conversion, dark SaaS call-to-action banner.
- **Documentation Deliverables:**
  - `AUDIT_REPORT.md`: Comprehensive Phase 0 architectural and compliance audit.
  - `CONTENT_AND_POLICY_REPORT.md`: Phase 1 policy alignment and disclaimer review.
  - `CONTENT_EDITORIAL_CALENDAR.md`: Phase 4 20-topic publication roadmap and quality guidelines.
  - `SEO_AUDIT_REPORT.md`: Phase 6 technical SEO analysis, schema audit, and Core Web Vitals strategy.
  - `ADSENSE_READINESS_REPORT.md`: Phase 7 Google AdSense policy scorecard and pre-submission checklist.
  - `TESTING_REPORT.md`: Phase 8 verification results (0 errors, 0 warnings across typecheck and linter).
  - `IMPLEMENTATION_STATUS.md`: Phase-by-phase implementation tracker updated to 100% complete.
  - `CHANGELOG.md`: Detailed changelog.

### Changed & Modernized
- **Layout & Global Architecture:**
  - `app/layout.tsx`:
    - Embedded official Google AdSense verification script in `<head>` (`ca-pub-7407561322459315`).
    - Added `other['google-adsense-account']` meta tag.
    - Updated title template to eliminate double-branding (`%s | Vanto Player`).
    - Mounted `<CookieConsent />` and `<AdBanner />`.
  - `app/sitemap.ts`: Added `/about` route, prioritized guides, and synchronized dynamic article timestamps.
  - `components/layout/Header.tsx`: Added direct links to Features, Knowledge Base, About, and Contact; fixed mobile menu navigation.
  - `components/layout/Footer.tsx`: Modernized to 5 structured columns; updated product summary; added prominent mandatory Legal & Content Policy Disclaimer banner.
  - `components/ads/AdBanner.tsx`: Implemented automated route suppression for legal/policy/utility routes (`/privacy`, `/terms`, `/refund`, `/dmca`, `/legal`, `/contact`, `/about`); added "ADVERTISEMENT" label; reserved minimum height (`min-h-[90px]`) to prevent CLS.
  - `lib/siteConfig.ts`: Purged exaggerated marketing language; replaced with accurate, compliant software description.
  - `lib/blog.ts`: Upgraded with `extractToc`, `getAllCategories`, `updatedDate`, `authorRole`, and `tags` support.
- **Knowledge Base Pages:**
  - `app/blog/page.tsx`: Unified to Dark SaaS theme (`#0a0a0a`), integrated `BlogIndexClient`, added breadcrumbs.
  - `app/blog/[slug]/page.tsx`: Complete redesign to Dark SaaS theme with `prose-invert`, dynamic `TableOfContents`, `ArticleActions`, `ArticleLd` structured data, enhanced author bio card, and in-article `AdBanner`.
- **Homepage (`app/page.tsx`):**
  - Assembled all 12 core sections: Hero, Product Overview, Features, App Screenshots, Supported Platforms, How It Works, Latest Articles, Fraud Awareness, Parental Controls, FAQ, Download CTA, and Footer.
  - Injected `SoftwareApplicationLd` and synchronized metadata.
- **Sections Modernized to Dark SaaS Identity:**
  - `Hero.tsx`: Client component with dismissible legal disclaimer, relative links, transparent zero-content messaging.
  - `FeatureVideo.tsx`: Refocused on hardware decoding and codecs (H.264, HEVC, AV1).
  - `FeaturesOverview.tsx`: Modernized to `#0a0a0a` cards; removed unescaped entities and unused imports.
  - `AppScreenshots.tsx`: Converted to dark theme; accurate XMLTV EPG descriptions.
  - `CompatibleDevices.tsx`: Clarified native Android TV, Fire TV, Tizen, webOS, and upcoming platforms.
  - `Download.tsx`: Dark theme; preserved Downloader code `7392829`; fixed broken windows links.
  - `FAQ.tsx`: Unified dark styling; accurate technical answers.
  - `ParentalControl.tsx` & `FraudAwareness.tsx`: Cleaned Next.js `<Link>` elements and dark theme surfaces.
- **Legal and How-To Pages Modernized to Dark Theme:**
  - `app/about/page.tsx`
  - `app/legal/page.tsx`
  - `app/terms/page.tsx`
  - `app/privacy/page.tsx`
  - `app/refund/page.tsx`
  - `app/dmca/page.tsx`
  - `app/support/page.tsx`
  - `app/download/page.tsx`
  - `app/contact/ContactClient.tsx`
  - `app/how-to/add-m3u-playlist/page.tsx`
  - `app/how-to/fix-playlist-not-loading/page.tsx`
  - `app/how-to/install-on-firestick-android-tv/page.tsx`
  - `app/how-to/install-on-lg-webos/page.tsx`
  - `app/how-to/install-on-samsung-smart-tv/page.tsx`
  - `app/how-to/use-vanto-player/page.tsx`
- **Posts Sanitized:**
  - `posts/how-to-find-best-iptv-subscription-2026.md`: Completely rewritten from a subscription recommendation post into an educational engineering guide on authorized streaming protocols, CDN security, and HLS transport.
  - 8 blog posts fixed to resolve malformed nested markdown links.

### Fixed
- Fixed 66 ESLint `react/no-unescaped-entities` errors by replacing raw single and double quotes with HTML entity codes.
- Fixed Turbopack React Server Component (RSC) error on `GET /` (`faqs.map is not a function`) by extracting static FAQ data out of client component `FAQ.tsx` into dedicated server-safe module `lib/faqData.ts`.
- Fixed 5 unused import warnings across `privacy/page.tsx`, `refund/page.tsx`, `Download.tsx`, and `FeaturesOverview.tsx`.
- Fixed missing Lucide icon imports (`Twitter`, `Linkedin`) by implementing clean inline SVGs.
- Fixed layout shift (CLS) in AdSense ad blocks by enforcing reserved min-height wrappers.
- Fixed double brand suffix in page metadata.

