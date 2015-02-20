#PHP Grunt Boilerplate

PHP Grunt Boilerplate gives you everything you need to get started with a well-organized, modern web application.  It's an HTML5 boilerplate with added [Grunt](http://gruntjs.com/) task management functionality. It also includes the ability to switch between development and production environments. 

In the development phase, individual CSS and JS files are output by PHP for easy building and debugging.  When it's ready for primetime, just flip the switch from "development" to "production" and your application will include the minified files.

For MAMP users, [Grunt MAMP](https://github.com/tonyspiro/grunt-mamp) is included to make configuring your development environment quick and easy.

##Getting Started

Clone the repo, install node modules and run grunt:
```
git clone https://github.com/tonyspiro/php-grunt-boilerplate
cd php-grunt-boilerplate
npm install
grunt
```
If you would like to use Grunt MAMP, go into `Gruntfile.js` and set your `site_full_path` and `port` variables, then:
```
grunt stop
grunt config
grunt start
```
You can also run this command to watch files for edits:
```
grunt watch
```

##Configuration

###config.php
1. Set your environment (development or production)
2. Set your CSS files

###Gruntfile.js
1. For development:
  - Add your less -> css files
  - Add your JSHint files
  - Add your watch files
2. For production:
  - Add your css combined files
  - Add your js combined files

### In development:
1. Your index.php file will include src/css files specified in the config.php file.
2. Your index.php file will include all src/js files specified in the config.php file.

### In production:
Just flip the switch into production and notice there's only one minified css file in the head, one minified js file in the `<head>` and one minified js file before the `</body>` tag.

Feel free to fork or open up issues for suggested features.
Find me on twitter [@tonyspiro](http://twitter.com/tonyspiro).