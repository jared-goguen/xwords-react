<?php

function config($key) {
  $config = [

    'name' => 'Crossword in React',
    'data_path' => __DIR__ . '/data/',
    'site_url' => 'http://' . $_SERVER['SERVER_NAME']

  ];
  return isset($config[$key]) ? $config[$key] : null;
}

