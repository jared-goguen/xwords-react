<html>
<head>
  <link rel="stylesheet" type="text/css" href="/assets/index.css">
  <link rel="stylesheet" type="text/css" href="/assets/puzzle.css">

</head>
<body>
<?php

require_once("vendor/autoload.php");
require_once("config.php");
require_once("crossword.php");

use \WF\Hypernova\Renderer;
use \WF\Hypernova\plugins\DevModePlugin;
$renderer = new Renderer('http://localhost:3030/batch');
$renderer->addPlugin(new DevModePlugin());

/*
$puzzle = loadPuzzle("Apr01-2018.xml");

$renderer->addJob('mainPuzzle', ['name' => 'Puzzle', 'data' => $puzzle]);
$response = $renderer->render();

$output = $response->results['mainPuzzle'];

if (isset($output->error)) {
  echo print_r($output);
} else {
  echo "<h4>" . $puzzle->title . "</h4>";
  echo $output->html;
}
*/

$renderer->addJob('test', ['name' => 'Test', 'data' => []]);
$response = $renderer->render();
$output = $response->results['test'];
if (isset($output->error)) {
  echo print_r($output);
} else {
  echo $output->html;
}

?>

</body>
</html>