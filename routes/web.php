<?php

$app->get('/', \App\Http\Controllers\HomeController::class . ':home')->setName('home');

$app->get('/cv-en', \App\Http\Controllers\CvController::class . ':en')->setName('cv-en');
$app->get('/cv-fr', \App\Http\Controllers\CvController::class . ':fr')->setName('cv-fr');
