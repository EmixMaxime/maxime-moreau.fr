<?php

use Emix\Asset\Asset;
use Emix\Asset\TwigAssetExtension;
use Emix\Config\ConfigRepository;
use Emix\Twig\TwigEnvExtension;
use Psr\Container\ContainerInterface;

$container = $app->getContainer();

$container['config'] = function () use ($configRepository) {
  return $configRepository;
};

$container[\Emix\Support\PathHelpers::class] = function (ContainerInterface $container) use ($pathHelpers) {
  return $pathHelpers;
};

$container[Asset::class] = function (ContainerInterface $container) use($configRepository) {
  $appConfig = $configRepository->get('app');

  if (ASSETS_DELIVERED_WEBPACK) {
    return new \Emix\Asset\Asset(null, ASSETS_DELIVERED_WEBPACK_URI . '/' . getenv('ASSETS_PUBLIC_PATH'));
  }

  return new \Emix\Asset\Asset(ASSETS_FILEINFO_PATH);
};

$container[TwigAssetExtension::class] = function (ContainerInterface $container) {
  return new \Emix\Asset\TwigAssetExtension($container[\Emix\Asset\Asset::class]);
};

$container[TwigEnvExtension::class] = function ($container) {
	return new \Emix\Twig\TwigEnvExtension($container['config']);
};

$container['lang'] = function() use ($configRepository) {
	$cookieLang = $_COOKIE['user_lang'] ?? null;
	$httpAcceptLang = $_SERVER["HTTP_ACCEPT_LANGUAGE"] ?? null;
	$langConfig = $configRepository->get('lang');


	// String $cookieLang, String $httpAcceptLang, array $supportedLanguages, String $defaultLang
	return new \Emix\Lang\Lang($cookieLang, $httpAcceptLang, $langConfig['supported'], $langConfig['default']);
};

$container['translator'] = function() use($configRepository) {
	$langConfig = $configRepository->get('lang');
	$translator = new Symfony\Component\Translation\Translator('en_US');
	// $translator = new Symfony\Component\Translation\Translator('fr_FR');
	
	$path = $langConfig['path'];
	
	$arr = [];
	foreach (glob("${path}/fr_FR/*.fr_FR.php") as $path) {
		$filename = basename($path);
		$arr[basename($filename)] = include($path);
	}

	$translations = [];

	/**
	 * ['skills.fr_FR.php' => ['Bonjour' => 'Hello world']]
	 * to
	 * ['Bonjour' => 'Hello world']
	 */
	foreach ($arr as $key => $value) {
		$translations = array_merge($translations, $value);
	}

	$arrayLoader = $yamlLoader = new \Symfony\Component\Translation\Loader\ArrayLoader();
	$translator->addLoader('array', $arrayLoader);

	$translator->addResource('array', $translations, 'en_US');

	return $translator;
};

$viewServiceProvider = new \App\Providers\ViewServiceProvider($container);
$viewServiceProvider->run();
