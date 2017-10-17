<?php

require('../vendor/autoload.php');

$pathHelpers = \Emix\Support\PathHelpers::getInstance();
require('../Emix/helpers.php');

require('../app/bootstrap/bootstrap.php');


$configRepository = \Emix\Config\ConfigRepository::getInstance();

$config = [
    'settings' => [
        'displayErrorDetails' => $configRepository->get('app.env') === 'dev',
    ]
];

// Create the slim application
$app = new \Slim\App($config);

// Mount object into the container
require('../app/container.php');


// Mount the routes
require('../routes/web.php');

$app->run();
