<html>
<body>

<?php

require_once "vendor/autoload.php";
require_once "config.php";
require_once "crossword.php";

use \WF\Hypernova\Renderer;
$renderer = new Renderer('http://localhost:3030/batch');


$puzzle = loadPuzzle("Apr01-2018.xml");

$renderer->addJob('mainPuzzle', ['name' => 'Puzzle', 'data' => $puzzle]);
$response = $renderer->render();

echo $response->results['mainPuzzle']->html;

?>

</body>
</html>