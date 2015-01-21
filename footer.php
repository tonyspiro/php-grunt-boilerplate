    <div class="container">
      <footer>
        <p>&copy; Company 2014</p>
      </footer>
    </div> <!-- /container -->

		<!-- Les scripts -->
    <?php 
    if(ENV=="development"){

      foreach($GLOBALS['DEV_JS_FILES'] as $dev_js_path){
        ?>
        <script src="<?php echo $dev_js_path; ?>"></script>
        <?php
      }
    }

    if(ENV=="production"){
      ?>
      <script src="dist/js/compiled.min.js"></script>
    <?php
    }
    ?>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
      (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
      e=o.createElement(i);r=o.getElementsByTagName(i)[0];
      e.src='//www.google-analytics.com/analytics.js';
      r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
      ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>
  </body>
</html>