module.exports = function (eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('full-width', 'layouts/full-width.html');
  eleventyConfig.addLayoutAlias('long-form', 'layouts/long-form.html');

  // Static files
  eleventyConfig.addPassthroughCopy('source/images');
  eleventyConfig.addPassthroughCopy('source/js');
  eleventyConfig.addPassthroughCopy('source/webfonts');
  eleventyConfig.addPassthroughCopy('source/favicon.ico');
  eleventyConfig.addPassthroughCopy('source/favicon-152.png');
  eleventyConfig.addPassthroughCopy('source/robots.txt');

  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = markdownIt(options).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dir: {
      input: './source',
      output: './destination',
    },
  };
};
