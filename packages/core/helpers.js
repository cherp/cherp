"use strict";

Template.registerHelper('entities', function () {
  var entities = [];
  _.each(cherp.entity, function (value, key) {
    entities.push({name:key});
  });
  return entities;
});

Template.registerHelper('s', function (operator, str) {
  str = str || '';
  check(operator, Match.OneOf(
    'capitalize',
    'decapitalize',
    'clean',
    'chars',
    'swapCase',
    'escapeHTML',
    'unescapeHTML',
    'isBlank',
    'lines',
    'reverse',
    'pred',
    'succ',
    'titleize',
    'camelize',
    'classify',
    'underscored',
    'dasherize',
    'humanize',
    'stripTags',
    'slugify',
    'toBoolean'
  ));
  return s[operator].call(str);
});
