<?php

$app->get('/', \App\Http\Controllers\HomeController::class . ':home')->setName('home');

$app->get('/cv', \App\Http\Controllers\CvController::class)->setName('cv');
