module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: false,
          data: {
            debug: false
          }
        },
        files: {
          "base.html": "jade/base.jade"
        }
      }
    }
  });

  // Load Jade Compiler
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task
  grunt.registerTask('default', ['jade']);
};