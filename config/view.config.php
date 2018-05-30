<?php 
use Emix\Asset\TwigAssetExtension;
use Emix\Twig\TwigEnvExtension;
use Symfony\Bridge\Twig\Extension\TranslationExtension;

$general = [
	'general' => [
		/*
		|--------------------------------------------------------------------------
		| Compiled View Path
		|--------------------------------------------------------------------------
		|
		| This option determines where all the compiled templates will be
		| stored for your application. Typically, this is within the storage
		| directory. However, as usual, you are free to change this value.
		|
		*/
		'compiled' => storage_path('cache/views'),


		'extensions' => [
			TwigAssetExtension::class,
			TwigEnvExtension::class
		]
	]
];

$twig = [

	/*
	|--------------------------------------------------------------------------
	| The twig configuration, directly injected into the service.
	|--------------------------------------------------------------------------
	|
	*/

	'twig' => [
		/*
		|--------------------------------------------------------------------------
		| View Storage Path
		|--------------------------------------------------------------------------
		|
		| Most templating systems load templates from disk. Here you may specify
		| the path that should be checked for your views.
		|
		*/
		'path' => resource_path('views'),

		'debug' => env('APP_ENV') === 'dev',

		'cache' => env('APP_ENV') === 'prod' ? $general['general']['compiled'] : false,

		'strict_variables' => true
	]

];

$a = array_merge($general, $twig);
return $a;
