"use strict";

module.exports = function(grunt){

  /* !!!! CONFIGURE !!!!
  ====================================================  */
  var config = {   
    
    site_full_path : '/your/full/site/path', // something like /Users/username/sites/mymampsite

    port : 8888,

    dev : {
      less_compile_files : [
        {
          "src/css/header.css" : "src/less/header.less"
        },
        {
          "src/css/main.css" : "src/less/main.less"
        },
        {
          "src/css/footer.css" : "src/less/footer.less"
        }
        // add more files here
      ],
    },

    prod : {

      css_combine_files : [
        "src/vendor/css/bootstrap.min.css",
        "src/css/header.css",
        "src/css/main.css",
        "src/css/footer.css"
        // add more css files here
      ],
      
      js_combine_head_files : [
        "src/vendor/js/modernizr-2.6.2-respond-1.1.0.min.js",
        // add more files to be combined in the head here
      ],

      js_combine_foot_files : [
        "src/vendor/js/jquery-1.10.1.min.js",
        "src/vendor/js/bootstrap.min.js",
        "src/js/on-ready.js",
        "src/js/on-load.js",
        "src/js/on-scroll.js",
        "src/js/on-resize.js",
        "src/js/functions.js"
        // add more files to be combined in production here
      ]
    },
    
    js_hint_files : [
      "src/js/on-ready.js",
      "src/js/on-load.js",
      "src/js/on-scroll.js",
      "src/js/on-resize.js",
      "src/js/functions.js"
      // add more files for linting here
    ],

    watch_files : [
      "Gruntfile.js",
      "src/less/*",
      "src/js/*",
      "!src/js/combined-head.js",
      "!src/js/combined-foot.js",
      "src/vendor/css/*",
      "src/vendor/js/*"
    ]
  }

  /* Init
  ============================ */
  grunt.initConfig({
    
    less: {
      production: {
        files: config.dev.less_compile_files
      }
    },

    jshint: {
      beforeconcat: config.js_hint_files
    },

    concat: {
      options: {
        separator: ";",
      },
      head: {
        src: config.prod.js_combine_head_files,
        dest: "src/js/combined-head.js",
      },
      foot: {
        src: config.prod.js_combine_foot_files,
        dest: "src/js/combined-foot.js",
      },
    },

    uglify: {
        my_target: {
          files: [
            { 
              "dist/js/combined-head.min.js" : "src/js/combined-head.js"
            },
            { 
              "dist/js/combined-foot.min.js" : "src/js/combined-foot.js"
            }
          ]
        }
    },

    cssmin: {
      combine: {
        files: {
          "dist/css/main.min.css" : config.prod.css_combine_files
        }
      }
    },

    mamp : {

      configserver : {
        options : {
          site_full_path : config.site_full_path,
          port : config.port
        }
      },

      startserver : {
        options : {
          site_full_path : config.site_full_path,
          port : config.port
        }
      },

      stopserver : {
      }
    },

    watch: {
      src: {
        files: config.watch_files,
        tasks: ["build"]
      }
    }
  });

  // Add plugins
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-mamp');

  // Register tasks
  grunt.registerTask("build", ["less","cssmin","concat","uglify","jshint"]);
  grunt.registerTask("default", ["less","cssmin","concat","uglify","jshint"]);
  grunt.registerTask("start", ["mamp:startserver"]);
  grunt.registerTask("stop", ["mamp:stopserver"]);
  grunt.registerTask("config", ["mamp:configserver"]);

  grunt.event.on("watch", function(action, filepath) {
    grunt.log.writeln(filepath + " has " + action);
  });

};
