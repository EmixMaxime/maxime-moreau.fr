<?php
/**
 * Prepare the application to run !
 */

// Load the configuration
$dotenv = new \Dotenv\Dotenv(root_path());
$dotenv->load();

$dotenv->required('APP_ENV')->allowedValues(['dev', 'prod']);

$appEnv = getenv('APP_ENV');

require __DIR__ . '/assets.php';
