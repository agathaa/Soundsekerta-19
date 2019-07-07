module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    sourceMap: false,
                    debugInfo: true,
                    trace: true,
                    outputStyle: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: "assets/scss",
                    src: ["**/*.scss"],
                    dest: "assets/css/themes",
                    rename: function (dest, src) {
                        return dest + "/" + src.replace('.scss', '.min.css')
                    }
                }]
            },
            prod: {
                options: {
                    sourceMap: false,
                    debugInfo: true,
                    trace: true,
                    outputStyle: "expanded"
                },
                files: [{
                    expand: true,
                    cwd: "assets/scss",
                    src: ["**/*.scss"],
                    dest: "assets/css/themes",
                    rename: function (dest, src) {
                        return dest + "/" + src.replace('.scss', '.css')
                    }
                }]
            }
        },
        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['sass:dev','sass:prod'],
                options: {
                    spawn: false,
                },
            },
        },
        validation: {
            options: {
                doctype: 'HTML5'
            },
            files: {
                src: ['*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-w3c-html-validation');
    grunt.registerTask('default', ['watch']);
}