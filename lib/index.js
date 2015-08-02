/*!
 * logger - index.js
 *
 * Copyright(c) 2015 - 2016 imwiz.com
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */


module.exports = function(req,res,next) {
  console.log(new Date(), req.method, req.url)
  next()
};
