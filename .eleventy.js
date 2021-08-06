const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const pluginRss = require("@11ty/eleventy-plugin-rss")
const { DateTime } = require("luxon");
const siteData = require("./_data/site.js");

module.exports = (config) => {

  // Front Matter Configuration
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->'
  })

  // Manual passthrough file copy
  config.addPassthroughCopy('img')
        .addPassthroughCopy('robots.txt')

  // Plugins
  config.addPlugin(eleventyNavigationPlugin)
  config.addPlugin(pluginRss);

  // Filters
  config.addFilter("formatDate", (inputDate) => { 
    return DateTime.fromJSDate(inputDate).toFormat('DDD - ttt');
   })

  return {

    // The follow template formats are processed.
    templateFormats: ["html", "md", "njk"],

    // Template engine for processing markdown content files.
    markdownTemplateEngine: "njk",

    // Template engine for processing HTML content files.
    htmlTemplateEngine: "njk",
    
    // Directory structure.
    dir: {
      pathPrefix: "/",
      input: '.',
      includes: './_includes',
      layouts: './_layouts',
      data: './_data',
      output: './_site'
    }
  }
}