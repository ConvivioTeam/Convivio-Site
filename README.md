# The Convivio Site

This site is build on Node.js and Eleventy.

## Installing

In the project root folder, run:

1. `nvm use`
1. `npm install`

## Local development

Run `npm run serve`

It compiles the site to `destination`, starts a local server for that folder, and watches the various files to recompile when modified.

## Deploy

First make your changed on a separate branch and push. Then create a new pull request to generate a Netlify preview.

Request review by another colleague.

Wait for the changes to be a approved and merged in. Netlify will then automatically deploy them to production with the command: `npm run start`

## Folder structure

### Top level files

Build related files, you shouldn't have to edit these files unless you're working on the build process of the site.

### source

Where all the source files are contained, this is where all the content is created.

### destination

The generated output into static HTML.
