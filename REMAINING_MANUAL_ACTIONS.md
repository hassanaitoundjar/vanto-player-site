# REMAINING MANUAL ACTIONS & SITE OWNER SUBMISSION GUIDE

**Domain:** `https://vantoplayer.com/`  
**Publisher ID:** `ca-pub-7407561322459315`  
**Target Completion Date:** Immediate / Prior to Requesting Google AdSense Review

---

## Overview

All automated codebase repairs, content audits, link fixes, structured data enhancements, and AdSense placement safeguards have been implemented. 

However, per Google policies and security boundaries, several critical actions **can only be performed manually by the website owner or administrator** within authenticated third-party dashboards.

Complete the following steps in sequence:

---

## Action Item 1: Deploy Latest Codebase Updates to Production

The local repository contains all article rewrites, broken link repairs, and the AdSense layout safety adjustments.

1. **Review Local Changes:**
   ```bash
   git status
   ```
2. **Commit Changes:**
   ```bash
   git add .
   git commit -m "feat(adsense): complete full audit, article rewrites, link repairs, and ad placement safety"
   ```
3. **Push to Remote Repository:**
   ```bash
   git push origin main
   ```
4. **Verify Deployment on Vercel:**
   - Log into your [Vercel Dashboard](https://vercel.com/).
   - Confirm that the latest deployment has finished building successfully without errors.
   - Test `https://vantoplayer.com/` in an incognito browser window to verify the new build is live and Vercel cache is updated.

---

## Action Item 2: Google Search Console (GSC) Sitemap & Indexing

Google AdSense crawlers require efficient discovery of your content pages. Submitting a sitemap to Google Search Console accelerates this process.

1. **Log in to Google Search Console:**
   - Visit [search.google.com/search-console](https://search.google.com/search-console).
   - Select the property: `https://vantoplayer.com/` (or `sc-domain:vantoplayer.com`).
2. **Submit XML Sitemap:**
   - Navigate to **Indexing** > **Sitemaps**.
   - In the "Add a new sitemap" field, enter: `sitemap.xml`.
   - Click **Submit**.
   - Verify that the status shows **"Success"** and the discovered URL count matches ~67 pages.
3. **Inspect Core URLs:**
   - Use the URL Inspection tool to test:
     - `https://vantoplayer.com/`
     - `https://vantoplayer.com/blog`
     - `https://vantoplayer.com/download`
     - `https://vantoplayer.com/privacy`
   - Click **Request Indexing** if any page was not previously indexed.

---

## Action Item 3: Verify `ads.txt` in Google AdSense Console

1. **Log into Google AdSense:**
   - Visit [adsense.google.com](https://www.google.com/adsense/).
   - Sign in with the account associated with `pub-7407561322459315`.
2. **Check `ads.txt` Status:**
   - Navigate to **Sites**.
   - Locate `vantoplayer.com`.
   - Verify that the `ads.txt` status displays as **"Authorized"** or **"Found"**.
   - *(Note: If it still shows "Not found", click "Check for updates". Google's crawler may take 24–48 hours to crawl `https://vantoplayer.com/ads.txt`, which is already verified live).*

---

## Action Item 4: Submit Site for AdSense Review

> [!CAUTION]
> **Do not submit until Action Item 1 (Push to Production) is completed and verified.**

1. In the Google AdSense dashboard, go to **Sites**.
2. Click on `vantoplayer.com` (or click **Add Site** if not already listed).
3. Check the confirmation boxes:
   - "I've added the code to my site" (The code is confirmed in `<head>` in production).
   - "I've published the ads.txt file" (`ads.txt` is confirmed live).
4. Click **Request Review** (or **Submit**).
5. **Expected Timeline:**
   - Initial review typically takes between 24 hours and 14 business days.
   - You will receive an automated email from Google upon completion.

---

## Action Item 5: Corporate Entity Transparency (Recommended)

Google AdSense and financial review partners prioritize transparency regarding the entity operating commercial software websites.

* **Current Status:** The website provides active contact channels (`support@vantoplayer.com`) and a clear DMCA designated agent email, but does not state a physical registered address or company registration number.
* **Recommended Action:** If you have an established legal entity (LLC, Ltd., Inc., or Sole Proprietorship), add the registered business name and jurisdiction to `app/about/page.tsx` and `app/legal/page.tsx`:
  - Example: *"Vanto Player is developed and published by [Company Name], a registered business entity in [City, Country]."*

---

## Action Item 6: Verify Downloader Code & APK Host

1. Confirm that numeric code **`7392829`** in the AFTVnews Downloader app points directly to your current stable Android TV / Fire TV APK file.
2. Download and install the APK via Downloader on a test Firestick or Android TV device to ensure the mirror URL remains active and fast.

---

## Action Item 7: Payment Gateway Webhook Verification

If you are actively selling lifetime evaluation licenses via Stripe or PayPal:
1. Verify that your live Stripe/PayPal API keys and webhook secrets are correctly set in your Vercel Environment Variables (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`).
2. Run a small test transaction ($1 or test card in staging) to verify that license generation emails are triggered correctly upon payment completion.

---

## Action Checklist Summary

| Task | Responsible Party | Estimated Time | Status |
|---|---|---|---|
| **Git Commit & Push to Vercel** | Site Owner | 2 minutes | Pending |
| **Verify Production Deployment** | Site Owner | 3 minutes | Pending |
| **GSC Sitemap Submission** | Site Owner | 5 minutes | Pending |
| **AdSense `ads.txt` Status Verification** | Site Owner | 5 minutes | Pending |
| **Click "Request Review" in AdSense** | Site Owner | 1 minute | Pending |
| **Add Registered Business Entity (Optional)** | Site Owner / Legal | 15 minutes | Optional |
| **Verify Downloader Code `7392829` APK Mirror** | Site Owner / QA | 5 minutes | Recommended |

