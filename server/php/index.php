<html>
  <head>
    <title><?php echo config('name'); ?></title>
    <link rel='stylesheet' type='text/css' href="<?php echo q_path('index.css'); ?>" >
    <link rel='stylesheet' type='text/css' href="<?php echo q_path('puzzle.css'); ?>" >
    <link rel='stylesheet' type='text/css' href="<?php echo q_path('webpack.css'); ?>" >
  </head>
  <body>
    <div id='puzzle'></div>
    <script src="<?php echo q_path('webpack.js'); ?>" defer></script>
  </body>
</html>