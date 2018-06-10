<?php

require_once(dirname(__DIR__).'/vendor/autoload.php');
require_once('config.php');
require_once('crossword.php');

if ( preg_match("/\/assets\/.*/", $_SERVER['REQUEST_URI']) ) {
  return false;
}

$router = new AltoRouter();

$router->map( 'GET', '/', function() {
  require('index.php');
});

echo $_SERVER['REQUEST_URI'];

$router->map( 'GET', '/puzzle/[*:date].json', function( $date ) {
  header('Content-Type: application/json');
  echo crosswordJSON($date);
});

$match = $router->match();

if( $match && is_callable( $match['target'] ) ) {
  call_user_func_array( $match['target'], $match['params'] ); 
} else {
  header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
