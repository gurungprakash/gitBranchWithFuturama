module.exports = function(grunt) {

    grunt.initConfig({

        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: 'src', 
                    livereload: true
                }
            }
        },

        watch: {
            all: {
                files: 'src/index.html',
                options: {
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', [
        'express',
        'open',
        'watch'
        ]);
};