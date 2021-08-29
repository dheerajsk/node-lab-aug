const loader = require('load-grunt-tasks');

module.exports = function (grunt) {
    loader(grunt);
    grunt.initConfig({
        cssmin: {
            target: {
                files: { 'css/home.min.css': ['css/*.css'] }
            }
        },
        watch:{
            files:['css/*'],
            tasks:['cssmin']
        }
    });

    grunt.registerTask('default', ['watch']);
}