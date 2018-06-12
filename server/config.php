<?php

function config($key) {

  $config = [
    'name' => 'xwords-react',
    'autoload' => 'vendor/autoload.php',
    'site_url' => 'http://' . $_SERVER['SERVER_NAME']
  ];

  return isset($config[$key]) ? $config[$key] : null;
}

function q_path($name) {
  $ext = pathinfo($name, PATHINFO_EXTENSION);
  return implode('/', [$ext, $name]);
}

