const sass = require('./build-process/sass-process');

module.exports = function (eleventyConfig) {
  // Sass pre-processing
  sass('./source/_sass/style.scss', './destination/css/style.css');

  // Aliases
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('full-width', 'layouts/full-width.html');
  eleventyConfig.addLayoutAlias('long-form', 'layouts/long-form.html');

  // Static file passthough
  eleventyConfig.addPassthroughCopy('source/images');
  eleventyConfig.addPassthroughCopy('source/js');
  eleventyConfig.addPassthroughCopy('source/webfonts');
  eleventyConfig.addPassthroughCopy('source/favicon.ico');
  eleventyConfig.addPassthroughCopy('source/favicon-152.png');
  eleventyConfig.addPassthroughCopy('source/robots.txt');

  // Custom markdown library
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = markdownIt(options).disable('code');
  eleventyConfig.setLibrary('md', markdownLib);

  // Custom Liquidjs options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  return {
    dir: {
      input: './source',
      output: './destination',
    },
  };
};
