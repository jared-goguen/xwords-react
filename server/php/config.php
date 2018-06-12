<?php

function config($key) {
  $root = '..';

  $config = [
    'name' => 'Crossword in React',
    'root' => $root,
    'autoload' => $root . '/vendor/autoload.php',
    'site_url' => 'http://' . $_SERVER['SERVER_NAME']
  ];

  return isset($config[$key]) ? $config[$key] : null;
}

function q_path($name) {
  $ext = pathinfo($name, PATHINFO_EXTENSION);
  return implode('/', [config('root'), $ext, $name]);
}

