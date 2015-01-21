<?php

/* Configure!
================================ */

define('ENV','development'); // development or production

// CSS files
$GLOBALS['DEV_CSS_FILES'] = array(
	
	'src/vendor/css/bootstrap.min.css',
	'src/css/header.css',
	'src/css/main.css',
	'src/css/footer.css'
	// add more css files here!
);

// JS files
$GLOBALS['DEV_JS_FILES'] = array(
	
	'src/vendor/js/modernizr-2.6.2-respond-1.1.0.min.js',
	'src/vendor/js/jquery-1.10.1.min.js',
	'src/vendor/js/bootstrap.min.js',
	'src/js/on-ready.js',
	'src/js/on-load.js',
	'src/js/on-scroll.js',
	'src/js/on-resize.js',
	'src/js/functions.js'
	// add more js files here!
);
?>