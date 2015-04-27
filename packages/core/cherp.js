"use strict";

cherp = {
  version: '0.0.1-alpha',
  db: {},
  entity: {},
};

cherp.registerEntity = function registerEntity (entityName, options) {
  cherp.entity[entityName] = {};
  if (options.collection) {
    cherp.db[options.collection.name] = new Mongo.Collection(
      options.collection.name,
      options.collection.options || {}
    );
  }
};

cherp.registerRoute = function registerRoute (route, options) {
  console.log(route, options);
  FlowRouter.route(route, {
    action: function(params) {
        console.log("Yeah! We are on the post:", params, options);
    }
  });
};
