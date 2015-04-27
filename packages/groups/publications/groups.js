"use strict";

Meteor.publish(null, function () {
  //publish default groups
  //proof of concept currently
  return cherp.db.groups.find({});
});
