const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'));
};


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  // Reverse proxy for google tag manager & partytown.
  createRedirect({
    fromPath: `/gtm/*`,
    toPath: `https://www.googletagmanager.com/*`,
    statusCode: 200,
  })
  createRedirect({
    fromPath: `/googleanalytics/*`,
    toPath: `https://www.google-analytics.com/*`,
    statusCode: 200,
  })
};
