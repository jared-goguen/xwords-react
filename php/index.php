<html>
<head>
  <title><?php echo config('name'); ?></title>
  <link rel='stylesheet' type='text/css' href='/assets/index.css'>
  <link rel='stylesheet' type='text/css' href='/assets/puzzle.css'>
</head>
<body>
<?php

require_once('crossword.php');

use \WF\Hypernova\Renderer;
use \WF\Hypernova\plugins\DevModePlugin;

$renderer = new Renderer(config('site_url') . ':3030/batch');

$puzzle = loadPuzzle('Apr01-2018.xml');

$renderer->addJob('mainPuzzle', ['name' => 'Puzzle', 'data' => $puzzle]);
$response = $renderer->render();

$output = $response->results['mainPuzzle'];


if (isset($output->error)) {
  echo print_r($output);
} else {
  echo '<h4>' . $puzzle->title . '</h4>';
  echo '<div id="puzzle">';
  echo $output->html;
  echo '</div>';
}

?>
<script src='/assets/react-client.js' defer></script>
</body>
</html>