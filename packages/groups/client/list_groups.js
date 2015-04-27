"use strict";

Template.cherpListGroups.helpers({
  groups: function () {
    return cherp.db.groups.find({});
  }
});
