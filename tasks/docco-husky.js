// grunt-docco-husky
// https://github.com/DavidSouther/grunt-docco-husky
//
// Copyright (c) 2012 Vy HOANG
// Licensed under the MIT license.

module.exports = function(grunt) {

  var docco = require('docco-husky');
  var _ = require('underscore');

  // ### TASKS
  grunt.registerMultiTask('docco_husky', 'Docco-husky processor.', function() {
    var cmd_options = [];

    cmd_options.push('-name');
    cmd_options.push(this.data.project_name);

    var paths = grunt.file.expand(this.data.files.src);
    _.each(paths, function(path){
      cmd_options.push(path);
    });

    var done = this.async();
    docco.document(cmd_options, function(err, result, code){
      grunt.log.writeln("Doccoed husky [" + src.join(", ") + "]; " + err ? err : "(No errors)" + "\n" + result + " " + code);
      done();
    });
  });
};
