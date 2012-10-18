/*
 * grunt-contrib-clean
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('clean', 'Clean files and folders.', function() {
    // Clean specified files / dirs.
    var files = grunt.file.expand(grunt.util._.pluck(this.files, 'src'));
    files.forEach(function(filepath) {
      // Warn if a source file/pattern was invalid.
      if (!grunt.file.exists(filepath)) {
        grunt.log.error('Source path "' + filepath + '" not found.');
        return '';
      }
      grunt.log.write('Cleaning "' + filepath + '"...');
      try {
        grunt.file.delete(filepath);
        grunt.log.ok();
      } catch (e) {
        grunt.log.error();
        grunt.verbose.error(e);
        grunt.fail.warn('Clean operation failed.');
      }
    });
  });

};
