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
    var options, tmp, cmd_options = [], args;

    // Getting the configs.
    tmp = grunt.config(['docco-husky', this.target, 'options']);
    if (typeof tmp === 'object') {
      grunt.verbose.writeln('Using "' + this.target + '" Docco-husky options.');
      options = tmp;
    } else {
      grunt.verbose.writeln('Using master Docco-huskey options.');
      args = grunt.config('docco_husky');
      cmd_options.push('-name');
      cmd_options.push(args.project_name);
      _.each(args.files, function(path){
        cmd_options.push(path);
      });

      options = cmd_options;
    }

    grunt.verbose.writeflags(options, 'Options');

    var done = this.async();
    var src = grunt.file.expandFiles(this.file.src);
    docco.document(options, function(err, result, code){
      grunt.log.writeln("Doccoed husky [" + src.join(", ") + "]; " + err ? err : "(No errors)" + "\n" + result + " " + code);
      done();
    });
  });
};
