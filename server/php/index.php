<html>
  <head>
    <title><?php echo config('name'); ?></title>
    <link rel='stylesheet' type='text/css' href="<?php echo q_path('index.css'); ?>" >
    <link rel='stylesheet' type='text/css' href="<?php echo q_path('puzzle.css'); ?>" >
  </head>
  <body>
    <div id='puzzle'></div>
    <script src="<?php echo q_path('react-client.js'); ?>" defer></script>
  </body>
</html>