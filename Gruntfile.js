'use strict';


module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);


  grunt.initConfig({
    watch: {
      jade: {
        files: [
          'app/**/*.jade'
        ],
        tasks: ['jade']
      },
      sass: {
        files: [
          'app/**/*.sass',
          'app/**/*.scss'
        ],
        tasks: ['sass', 'autoprefixer']
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        title: "ThreeJS",
        success: false,
        duration: 3
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      open: {
        options: {
          base: 'dist'
        }
      }
    },
    sass: {
      all: {
        options: {
          sourcemap: false
        },
        files: {
          'dist/main.css': 'app/css/main.sass'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      all: {
        files: {
          'dist/main.css': 'dist/main.css'
        }
      }
    },
    jade: {
      all: {
        files: [{
          expand: true,
          src: '**/*.jade',
          cwd: 'app/',
          dest: 'dist/',
          ext: '.html'
        }]
      }
    },
    browserify: {
      options: {
        watch: true
      },
      all: {
        files: {
          'dist/app.js': 'app/js/app.js'
        }
      }
    },
    copy: {
      all: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app/',
          dest: 'dist/',
          src: [
            'i/**/*'
          ]
        }]
      }
    },
    clean: ['dist'],
    concurrent: {
      load: [
        'copy',
        'jade',
        'sass'
      ],
      build: [
        'copy',
        'jade',
        'sass',
        'browserify'
      ]
    },
    uglify: {
      options: {
        mangle: false
      },
      all: {
        files: {
          'dist/app.js': 'dist/app.js'
        }
      }
    }
  });


  grunt.registerTask('open', [
    'notify_hooks',
    'clean',
    'concurrent:load',
    'autoprefixer',
    'browserify',
    'connect:open',
    'watch'
  ]);

};
