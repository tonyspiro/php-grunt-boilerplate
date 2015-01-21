"use strict";

module.exports = function(grunt){

  /* ! Configure !
  ============================ */
  var config = {   
    
    dev : {
      less_render_files : [
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
      
      js_combine_files : [
        "src/vendor/js/jquery-1.10.1.min.js",
        "src/vendor/js/modernizr-2.6.2-respond-1.1.0.min.js",
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
      "src/less/*",
      "src/js/*",
      "src/vendor/css/*",
      "src/vendor/js/*"]
  }

  /* Init
  ============================ */
  grunt.initConfig({
    
    less: {
      production: {
        files: config.dev.less_render_files
      }
    },

    jshint: {
      beforeconcat: config.js_hint_files
    },

    concat: {
      options: {
        separator: ";",
      },
      dist: {
        src: config.prod.js_combine_files,
        dest: "src/js/compiled.js",
      },
    },

    uglify: {
        my_target: {
          files: {
            "dist/js/compiled.min.js" : "src/js/compiled.js"
          }
        }
    },

    cssmin: {
      combine: {
        files: {
          "dist/css/main.min.css" : config.prod.css_combine_files
        }
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

  // Register tasks
  grunt.registerTask("build", ["less","cssmin","concat","uglify","jshint"]);
  grunt.registerTask("default", ["less","cssmin","concat","uglify","jshint"]);

  grunt.event.on("watch", function(action, filepath) {
    grunt.log.writeln(filepath + " has " + action);
  });

};
