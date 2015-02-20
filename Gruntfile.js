module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: 'src/**/*.js',
                options: {
                    specs: 'test/*.test.js',
                    vendor: ['bower_components/jquery/dist/jquery.min.js']
                }
            }
        },
        uglify : {
            js: {
                src: 'src/textflow.jquery.js',
                dest : 'dist/textflow.jquery.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default', ['jasmine:test', 'uglify:js']);
};
