<?php

$app->get('/', \App\Http\Controllers\HomeController::class . ':home')->setName('home');
