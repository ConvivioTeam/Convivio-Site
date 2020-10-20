# The Convivio Site

[![Greenkeeper badge](https://badges.greenkeeper.io/ConvivioTeam/Convivio-Site.svg)](https://greenkeeper.io/)

This project is built using Jekyll and Gulp.

## Dependencies

[NVM](https://github.com/creationix/nvm), [RVM](https://rvm.io/), and [Bundler](http://bundler.io/)

## Installing

In the project root folder, run:

1. `nvm use`
1. `npm install --global gulp-cli`
1. `nvm install`
1. `rvm install 2.3.6`
1. `gem install bundle`
1. `bundle install`

## Local development

Run `gulp`

It compiles the site to `destination`, starts a local server for that folder, and watches the various files to recompile when modified.

## Deploy

First make your changed on a separate branch and push. Then create a new pull request to generate a Netlify preview.

Request review by another colleague.

Wait for the changes to be a approved and merged in. Netlify will then automatically deploy them to production.

## Folder structure

### Top level files

Build related files, you shouldn't have to edit these  files unless you're working on the build process of the site.

### source

Where all the source files are contained, this is where all the content is created.

### destination

The generated output into static HTML.
