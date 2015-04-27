"use strict";

cherp = {
  version: '0.0.1-alpha',
  db: {},
  entity: {},
};

cherp.registerEntity = function (entityName, options) {
  cherp.entity[entityName] = {};
  if (options.collection) {
    cherp.db[options.collection.name] = new Mongo.Collection(
      options.collection.name,
      options.collection.options || {}
    );
  }
};
