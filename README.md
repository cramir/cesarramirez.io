# cramir.com

Personal site — Astro, markdown-first, deployed static.

## Dev

```bash
npm install
npm run dev
```

## Content

Blog posts live in `src/content/blog/*.md` with frontmatter:

```yaml
---
title: Post title
description: One-liner
pubDate: 2026-11-16
draft: true|false
tags: [security, cloud-cost]
---
```

Posts with `draft: true` never render in production builds.

## Publish path

Merge to `master` = deploy (CI build → S3/CloudFront sync once deploy workflow
is enabled). Content pipeline commits approved posts directly.
