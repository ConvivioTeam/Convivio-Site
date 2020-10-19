module.exports = function (eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('full-width', 'layouts/full-width.html');
  eleventyConfig.addLayoutAlias('long-form', 'layouts/long-form.html');

  return {
    dir: {
      input: './source',
      output: './destination',
    },
  };
};
