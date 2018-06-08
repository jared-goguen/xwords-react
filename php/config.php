<?php


function config($key) {
  $config = [
    'name' => 'Crossword in React',
    'data_path' => __DIR__ . '/data/',
  ];

  return isset($config[$key]) ? $config[$key] : null;
}

