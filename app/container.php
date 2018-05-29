<?php

use Emix\Asset\Asset;
use Emix\Asset\TwigAssetExtension;
use Emix\Config\ConfigRepository;
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

$container['lang'] = function() use ($configRepository) {
	$cookieLang = $_COOKIE['user_lang'] ?? null;
	$httpAcceptLang = $_SERVER["HTTP_ACCEPT_LANGUAGE"] ?? null;
	$langConfig = $configRepository->get('lang');


	// String $cookieLang, String $httpAcceptLang, array $supportedLanguages, String $defaultLang
	return new \Emix\Lang\Lang($cookieLang, $httpAcceptLang, $langConfig['supported'], $langConfig['default']);
};

$view = new \App\Providers\ViewServiceProvider($app);
$view->run();
