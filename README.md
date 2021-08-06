## Front Matter Format

1. **title:** Human-Readable page title that appears as an `<h1>`.
2. **meta_title:** Page title used for `<title>` and `<meta property="og:title">` values. If this field is not provided, the `title` field will be used as a fallback.
3. **description:** Page description used for `<meta name="description">`, `<meta property="og:description">`, and `<meta name="twitter:description">` values.
4. **tags:**
   1. **section:** If section is used as a tag, the page is considered a top-level section and included in top navigation.
5. **layout:** Layout file used for the page content.
6. **permalink:** URL path starting and ending with `/`. Used for all values requiring a hostname (e.g. 
7. **eleventyNavigation:**
   1. **key:** Name of section shown in main navigation.
   2. **order:** Order of section in main navigation.
8. **image:**: (Used for content lead `<img>`, `<og:image>`, and `<twitter:image>`)
   1. **path:**: Absolute file path from site root (starting with `/`).
   2. **alt:**: Image description.
   3. **width**: Image width.
   4. **height:** Image height.
9. **og_type:**: Open graph `og:type` e.g. `website`, `blog`, `article`, or other types.
1.  **twitter_card_type:**: Type of Twitter card e.g. `summary`, `summary_large_image`, `player`, `app`. If not included `summary` is used by default.

