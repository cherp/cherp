"use strict";

Meteor.startup(function () {
  cherp.registerEntity('groups', {
    collection: {
      name: 'groups',
      options: {},
    }
  });

  if (Meteor.isServer) {
    if (cherp.db.groups.find({}).fetch().length === 0) {
      cherp.db.groups.insert({
        name: 'users',
      });
      cherp.db.groups.insert({
        name: 'my organisation',
      });
    }
  }

});
