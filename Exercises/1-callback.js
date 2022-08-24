"use strict";

const iterate = (obj, callback) => {
  const items = Object.keys(obj);
  for (const key of items) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

module.exports = { iterate };
