module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/currency.js', 'tests/currency.js'],
            options: {
                esversion: 6
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
