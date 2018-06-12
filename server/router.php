<?php

require_once('config.php');
require_once(config('autoload'));
require_once(q_path('crossword.php'));

$router = new AltoRouter();

$router->map( 'GET', '/', function() {
  require(q_path('index.php'));
});

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
