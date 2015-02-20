<?php

/* Configure!
================================ */

function head_files(){

	if(ENV=="development"){

    foreach($GLOBALS['CSS_FILES'] as $dev_css_path){
      ?>
      <link rel="stylesheet" href="<?php echo $dev_css_path; ?>">
      <?php
    }

    foreach($GLOBALS['JS_HEAD_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }

  if(ENV=="production"){
    ?>
    <link rel="stylesheet" href="dist/css/main.min.css">
  	<script src="dist/js/combined-head.min.js"></script>
  <?php
  }
}

function foot_files(){
	if(ENV=="development"){

    foreach($GLOBALS['JS_FOOT_FILES'] as $dev_js_path){
      ?>
      <script src="<?php echo $dev_js_path; ?>"></script>
      <?php
    }
  }

  if(ENV=="production"){
    ?>
    <script src="dist/js/combined-foot.min.js"></script>
  <?php
  }
}