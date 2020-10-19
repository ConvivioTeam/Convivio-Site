module.exports = function (eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('full-width', 'layouts/full-width.html');
  eleventyConfig.addLayoutAlias('long-form', 'layouts/long-form.html');

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
