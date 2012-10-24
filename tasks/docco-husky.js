// grunt-docco-husky
// https://github.com/DavidSouther/grunt-docco-husky
//
// Copyright (c) 2012 Vy HOANG
// Licensed under the MIT license.

module.exports = function(grunt) {

  var docco = require('docco-husky');


  // ### TASKS
  grunt.registerMultiTask('docco_husky', 'Docco-husky processor.', function() {
    var options, tmp;

    // Getting the configs.
    tmp = grunt.config(['docco-husky', this.target, 'options']);
    if (typeof tmp === 'object') {
      grunt.verbose.writeln('Using "' + this.target + '" Docco-husky options.');
      options = tmp;
    } else {
      grunt.verbose.writeln('Using master Docco-huskey options.');
      options = grunt.config('docco_husky').args;
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
