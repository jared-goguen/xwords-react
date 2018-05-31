<html>
<body>

<?php

require __DIR__ . '/vendor/autoload.php';

use \WF\Hypernova\Renderer;

$renderer = new Renderer('http://localhost:3030/batch');
$renderer->addJob('test', ['name' => 'TestComponent', 'data' => ['name' => 'Bob']]);
$response = $renderer->render();

echo $response->results['test']->html;


?>

</body>
</html>