const loader = require('load-grunt-tasks');

module.exports = function (grunt) {
    loader(grunt);
    grunt.initConfig({
        cssmin: {
            target: {
                files: { 'css/home.min.css': ['css/home.css'] }
            }
        }
    });

    grunt.registerTask('default', ['cssmin']);
}