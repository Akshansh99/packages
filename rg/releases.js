'use strict';

var github = require('../_common/github.js');
var owner = 'BurntSushi';
var repo = 'ripgrep';

module.exports = function (request) {
  return github(request, owner, repo).then(function (all) {
    return all;
  });
};

if (module === require.main) {
  module.exports(require('@root/request')).then(function (all) {
    console.log(JSON.stringify(all));
    //console.log(JSON.stringify(all, null, 2));
  });
}